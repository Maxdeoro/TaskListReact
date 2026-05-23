import { useState } from 'react';
import { CompletedTaskList } from './completedTaskList/CompletedTaskList';
import { Footer } from './footer/Footer';
import './index.css';
import { TaskForm } from './taskForm/TaskForm';
import { TaskList } from './taskList/TaskList';

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

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button className={`close-button ${openSection.taskList ? "open" : ""}`}
                onClick={() => toggleSection('taskList')}
        >+</button>
        {openSection.taskList && <TaskForm />}
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
        {openSection.tasks && <TaskList />}
      </div>
      <div className="completed-task-container">
        <h2>Completed Tasks</h2>
        <button className={`close-button ${openSection.completedTasks ? "open" : ""}`}
                onClick={() => toggleSection('completedTasks')}
        >+</button>
        {openSection.completedTasks && <CompletedTaskList />}
      </div>
      <Footer />
    </div>
  )
}

export default App;
