//Add functionality to track whether a task is overdue.
//To display overdue tasks, add the class "overdue" to the task.


//1 — Create a state that tracks the current time.
//2 — Create a side effect that updates the current time state every second.
//3 — Dynamically pass the state that tracks the current time to the TaskItem component (if deadline < current time, then true).
//4 — Add the "overdue" class to the <li className="task-item"></li> element if the deadline has passed.


import { useState, useEffect } from 'react';
import { CompletedTaskList } from './completedTaskList/CompletedTaskList';
import { Footer } from './footer/Footer';
import './index.css';
import { TaskForm } from './taskForm/TaskForm';
import { TaskList } from './taskList/TaskList';

function App() {

  const [sortType,setSortType] = useState('date');    // sort by type: date or priority
  const [sortOrder,setSortOrder] = useState('asc');   // sort by order: ascend or descend
  const [currentTime,setCurrentTime] = useState(new Date());
  // console.log(currentTime);


  const [openSection,setOpenSection] = useState({
    taskList: false,
    tasks: true,
    completedTasks: true,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function toggleSection(section) {
    setOpenSection((prevValue) => ({
      ...prevValue,
      [section]: !prevValue[section],
    }));
  };

  // add new task to array
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, {...task, completed: false, id: Date.now()}]);
  };
  // console.log(tasks);

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  };

  function completeTask(id){
    setTasks(tasks.map(task => task.id === id ? {...task, completed: true} : task));
  };


  function sortTask(tasks){
    return (
      tasks.slice().sort((a,b) => {
        if(sortType === 'priority') {
          const priorityOrder = {
            High: 1,
            Medium: 2,
            Low: 3,
          };
          return sortOrder === 'asc' 
            ? priorityOrder[a.priority]-priorityOrder[b.priority]
            : priorityOrder[b.priority]-priorityOrder[a.priority];
        } else {
          return sortOrder === 'asc' 
          ? new Date(a.deadline) - new Date(b.deadline)
          : new Date(b.deadline) - new Date(a.deadline);
        }
      })
    );
  };

  function toggleSortOrder(type) {
    if(sortType === type) {
      setSortType(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortType(type);
      setSortOrder('asc');
    }
  };

  const activeTasks = sortTask(tasks.filter((task) => !task.completed));   //completed === false
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <div>Today is: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}</div>
        <button className={`close-button ${openSection.taskList ? "open" : ""}`}
                onClick={() => toggleSection('taskList')}
        >+</button>
        {openSection.taskList && <TaskForm addTask={addTask}/>}
      </div>
      <div className="task-container">
        <h2>Tasks</h2>
        <button className={`close-button ${openSection.tasks ? "open" : ""}`}
                onClick={() => toggleSection('tasks')}
        >+</button>
        <div className='sort-controls'>
          <button className={`sort-button ${sortType === 'date' ? 'active' : ''}`}
                  onClick={() => toggleSortOrder('date')}
          >
            By Date {sortType === 'date' && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
          </button>
          <button className={`sort-button ${sortType === 'priority' ? 'active' : ''}`}
                  onClick={() => toggleSortOrder('priority')}
          >
            By Priority {sortType === 'priority' && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
          </button>
        </div>
        {openSection.tasks && <TaskList activeTasks={activeTasks}
                                        deleteTask={deleteTask}
                                        completeTask={completeTask}
                                        currentTime={currentTime}
        />}
      </div>
      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button className={`close-button ${openSection.completedTasks ? "open" : ""}`}
                onClick={() => toggleSection('completedTasks')}
        >+</button>
        {openSection.completedTasks && <CompletedTaskList completedTasks={completedTasks}
                                                          deleteTask={deleteTask}  
        />}
      </div>
      <Footer />
    </div>
  )
}

export default App;
