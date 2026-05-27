import '../index.css';
import { TaskItem } from '../taskItem/TaskItem';

export function TaskList({activeTasks,deleteTask,completeTask}) {

    console.log(activeTasks);

    return <ul className='task-list'>
        {activeTasks.map((task) => <TaskItem key={task.id} task={task}
                                             deleteTask={deleteTask}
                                             completeTask={completeTask}
        />)}
    </ul>
};