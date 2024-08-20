import { useState } from 'react';
import axios from 'axios';
import './EditInput.css';

const EditInput = ({ taskElement, todoAPIHandler, setIsOpenHandler }) => {
    const [newTask, setNewTask] = useState('');

    const apikey = process.env.REACT_APP_API_URL;

    const editTaskHandler = async (e) => {
        e.preventDefault();
        await axios.patch(`${apikey}${taskElement._id}`, { task: newTask })
        setIsOpenHandler(false);
        todoAPIHandler();
    }

    return (
        <form onSubmit={(e) => editTaskHandler(e)} className="edit_form">
            <input type="text" name="task" defaultValue={taskElement.name} onChange={(e) => setNewTask(e.target.value)}/>
            <button type="submit">edit</button>
            <button onClick={() => setIsOpenHandler(false)} type="button">cancel</button>
        </form>
    );
};

export default EditInput;