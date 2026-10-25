import { useContext } from 'react';
import '../index.css';
import { TaskContext } from '../context/taskContext';

export function TaskItem({task}) {
    const {deleteTask,completeTask,isOverdue} = useContext(TaskContext);
    const {title,priority,deadline,id} = task;

    return (
        <li className={`task-item ${priority.toLowerCase()} ${isOverdue ? "overdue" : ""}`}>
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
    )
};