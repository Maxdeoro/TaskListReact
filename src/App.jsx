import { CompletedTaskList } from './completedTaskList/CompletedTaskList';
import { Footer } from './footer/Footer';
import './index.css';
import { TaskForm } from './taskForm/TaskForm';
import { TaskList } from './taskList/TaskList';

function App() {
  return <div className="app">
    <div className="task-container">
      <h1>Task List with Priority</h1>
      <button className="close-button">+</button>
      <TaskForm />
    </div>
    <div className="task-container">
      <h2>Tasks</h2>
      <button className="close-button">+</button>
      <div className='sort-controls'>
        <button className='sort-button'>By Date</button>
        <button className='sort-button'>By Priority</button>
      </div>
      <TaskList />
    </div>
    <div className="completed-task-container">
      <h2>Completed Tasks</h2>
      <button className="close-button">+</button>
      <CompletedTaskList />
    </div>
    <Footer />
  </div>;
}

export default App;
