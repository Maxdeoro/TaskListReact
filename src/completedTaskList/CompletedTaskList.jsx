import { CompletedTaskItem } from '../completedTaskItem/CompletedTaskItem';
import '../index.css';
import { useContext } from 'react';
import { useTask } from '../TaskProvider';

export function CompletedTaskList() {

    const {completedTasks} = useTask();

    return <ul className='completed-task-list'>
        {completedTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
        ))}
    </ul>
};