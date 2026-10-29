// import { CompletedTaskItem } from '../completedTaskItem/CompletedTaskItem';
import '../index.css';
import { TaskContext } from '../context/taskContext';
import { useContext } from 'react';

export function CompletedTaskList() {

    const {completedTasks} = useContext(TaskContext);

    return <ul className='completed-task-list'>
        {completedTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
        ))}
    </ul>
};