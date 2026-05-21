import '../index.css';

 export function TaskForm() {
    return <form className='task-form'>
        <input type='text' value={''} placeholder='Task title' required/>
        <select value={''} >
            <option value={'High'}>High</option>
            <option value={'Medium'}>Medium</option>
            <option value={'Low'}>Low</option>
        </select>
        <input type='datetime-local' required value={''}/>
        <button type='submit'>Add Task</button>
    </form>
};