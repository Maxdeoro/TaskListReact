import '../index.css';
import { TaskItem } from '../taskItem/TaskItem';

export function TaskList({activeTasks,deleteTask,completeTask,currentTime}) {

    // console.log(activeTasks);

    return <ul className='task-list'>
        {activeTasks.map((task) => <TaskItem key={task.id} task={task}
                                             deleteTask={deleteTask}
                                             completeTask={completeTask}
                                             isOverdue={new Date(task.deadline) < currentTime}
        />)}
    </ul>
};