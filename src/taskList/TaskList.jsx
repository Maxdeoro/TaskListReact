import '../index.css';
import { TaskItem } from '../taskItem/TaskItem';

export function TaskList() {
    return <ul className='task-list'>
        <TaskItem />
    </ul>
};