import { CompletedTaskItem } from '../completedTaskItem/CompletedTaskItem';
import '../index.css';
import { TaskContext } from '../context/taskContext';
import { useContext } from 'react';
// import { TaskItem } from '../taskItem/TaskItem';

export function CompletedTaskList() {

    const {completedTasks,deleteTask} = useContext(TaskContext);

    return <ul className='completed-task-list'>
        {completedTasks.map(task => <CompletedTaskItem completedTasks={completedTasks}
                                                       key={task.id}
                                                       task={task}
                                                       deleteTask={deleteTask}
        />)}
    </ul>
};