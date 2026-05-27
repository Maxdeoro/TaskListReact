import { CompletedTaskItem } from '../completedTaskItem/CompletedTaskItem';
import '../index.css';
import { TaskItem } from '../taskItem/TaskItem';

export function CompletedTaskList({completedTasks,deleteTask}) {
    return <ul className='completed-task-list'>
        {completedTasks.map(task => <CompletedTaskItem completedTasks={completedTasks}
                                                       key={task.id}
                                                       task={task}
                                                       deleteTask={deleteTask}
        />)}
    </ul>
};