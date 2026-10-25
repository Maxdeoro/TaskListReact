import { useContext } from 'react';
import '../index.css';
import { TaskItem } from '../taskItem/TaskItem';
import { TaskContext } from '../context/taskContext';

export function TaskList() {

    const {activeTasks,deleteTask,completeTask,currentTime} = useContext(TaskContext)

    return <ul className='task-list'>
        {activeTasks.map((task) => <TaskItem key={task.id} task={task}
                                             deleteTask={deleteTask}
                                             completeTask={completeTask}
                                             isOverdue={new Date(task.deadline) < currentTime}
        />)}
    </ul>
};