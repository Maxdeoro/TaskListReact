import '../index.css';

export function TaskItem({task,deleteTask,completeTask}) {

    const {title,priority,deadline,id} = task;

    console.log(task);

    return <li className={`task-item ${priority.toLowerCase()}`}>
        <div className='task-info'>
            <div>{title}<strong>{` ${priority}`}</strong></div>

            <div className='task-deadline'>Due: {new Date(deadline).toLocaleString()}</div>
        </div>
        <div className='task-buttons'>
            <button className='complete-button'
                    onClick={() => completeTask(id)}
            >
                Completed
            </button>
            <button className='delete-button'
                    onClick={() => deleteTask(id)}
            >
                Delete
            </button>
        </div>
    </li>
};