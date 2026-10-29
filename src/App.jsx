import { useState, useEffect, useContext } from 'react';
import { CompletedTaskList } from './completedTaskList/CompletedTaskList';
import { Footer } from './footer/Footer';
import './index.css';
import { TaskForm } from './taskForm/TaskForm';
import { TaskList } from './taskList/TaskList';
import { TaskContext } from './context/taskContext';

function App() {
  const {
      tasks,
      sortType,
      sortOrder,
      currentTime,
      openSection,
      activeTasks,
      completedTasks,
      toggleSection,
      addTask,
      deleteTask,
      completeTask,
      sortTask,
      toggleSortOrder,
  } = useContext(TaskContext);

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
          {openSection.tasks && <TaskList 
                                          // activeTasks={activeTasks}
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
