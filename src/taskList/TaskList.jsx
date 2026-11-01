import { useContext } from 'react';
import '../index.css';
import { TaskItem } from '../taskItem/TaskItem';
import { useTask } from '../TaskProvider';

export function TaskList() {

    const {activeTasks,deleteTask,completeTask,currentTime} = useTask();

    return <ul className='task-list'>
        {activeTasks.map((task) => <TaskItem key={task.id} task={task}
                                             deleteTask={deleteTask}
                                             completeTask={completeTask}
                                             isOverdue={new Date(task.deadline) < currentTime}
        />)}
    </ul>
};