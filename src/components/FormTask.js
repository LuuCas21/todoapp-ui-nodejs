import { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import axios from 'axios';
import './FormTask.css';

const FormTask = ({ todoAPI }) => {
    const [taskInput, setTaskInput] = useState('');

    const apikey = process.env.REACT_APP_API_URL;

    const sendTaskPost = async () => {
        await axios.post(apikey, { task: taskInput });
        todoAPI();
    };

    const sendTaskHandler = (e) => {
        e.preventDefault();
        sendTaskPost();
        setTaskInput('');
    };

    return (
        <form className="form__" onSubmit={(e) => sendTaskHandler(e)}>
            <input className="task_input" type="text" name="task" onChange={(e) => setTaskInput(e.target.value)} value={taskInput} placeholder="Enter your new task" required/>
            <button className="task_btn" type="submit">
            <IoMdAdd style={{ fontSize: '20px' }}/>
            </button>
        </form>
    )
}

export default FormTask;