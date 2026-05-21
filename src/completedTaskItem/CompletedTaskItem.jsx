import '../index.css';

export function CompletedTaskItem() {
    return <li className='task-item completed'>
        <div className='task-info'>
            <div>#4 Task <strong>Low</strong></div>
            <div className='task-deadline'>Due: {new Date().toLocaleString()}</div>
        </div>
        <div className='task-buttons'>
            <button className='delete-button'>Delete</button>
        </div>
    </li>
};