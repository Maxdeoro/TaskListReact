import { CompletedTaskItem } from '../completedTaskItem/CompletedTaskItem';
import '../index.css';
import { TaskItem } from '../taskItem/TaskItem';

export function CompletedTaskList() {
    return <ul className='completed-task-list'>
        {/* <CompletedTaskItem /> */}
        <TaskItem />
    </ul>
};