import { useState } from 'react';
import '../index.css';

export function TaskForm({addTask}) {

    const [title,setTitle] = useState('');
    const [priority, setPriority] = useState('Low');
    const [deadline, setDeadline] = useState('');
    // const [tasks, setTasks] = useState([]);


    function handleSubmit(e) {
        e.preventDefault();
        if(title.trim() && deadline) {              // remove backspaces, check if deadlile is set
            addTask({title, priority, deadline});
            setTitle('');
            setPriority('Low');
            setDeadline('');
        }
    };

    return <form className='task-form' onSubmit={handleSubmit}>
        <input type='text' value={title}
                placeholder='Task title' required
                onChange={(event) => setTitle(event.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value={'High'} >High</option>
            <option value={'Medium'} >Medium</option>
            <option value={'Low'} >Low</option>
        </select>
        <input type='datetime-local' required value={deadline}
               onChange={(e) => setDeadline(e.target.value)}
        />
        <button type='submit'>Add Task</button>
    </form>
};