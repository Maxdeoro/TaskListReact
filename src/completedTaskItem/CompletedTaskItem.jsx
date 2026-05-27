import '../index.css';

export function CompletedTaskItem({task,deleteTask}) {

    const {title,priority,deadline,id} = task;

    return <li className='task-item completed'>
        <div className='task-info'>
            <div>{title} <strong>{` ${priority}`}</strong></div>
            <div className='task-deadline'>Due: {new Date(deadline).toLocaleString()}</div>
        </div>
        <div className='task-buttons'>
            <button className='delete-button' onClick={() => deleteTask(id)}>
                Delete
            </button>
        </div>
    </li>
};