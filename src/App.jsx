import { useState } from 'react';
import { CompletedTaskList } from './completedTaskList/CompletedTaskList';
import { Footer } from './footer/Footer';
import './index.css';
import { TaskForm } from './taskForm/TaskForm';
import { TaskList } from './taskList/TaskList';
import { TaskItem } from './taskItem/TaskItem';

function App() {

  const [openSection,setOpenSection] = useState({
    taskList: false,
    tasks: true,
    completedTasks: true,
  });

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
  console.log(tasks);

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  };

  function completeTask(id){
    setTasks(tasks.map(task => task.id === id ? {...task, completed: true} : task));
  };

  const activeTasks = tasks.filter((task) => !task.completed);   //completed === false
  const completedTasks = tasks.filter((task) => task.completed);

  console.log(completedTasks);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
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
          <button className='sort-button'>By Date</button>
          <button className='sort-button'>By Priority</button>
        </div>
        {openSection.tasks && <TaskList activeTasks={activeTasks}
                                        deleteTask={deleteTask}
                                        completeTask={completeTask}
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
