import '../index.css';

export function TaskItem() {
    return <li className='task-item'>
        <div className='task-info'>
            <div>Title<strong>Medium</strong></div>
            <div className='task-deadline'>Due: {new Date().toLocaleString()}</div>
        </div>
        <div className='task-buttons'>
            <button className='complete-button'>Completed</button>
            <button className='delete-button'>Delete</button>
        </div>
    </li>
};