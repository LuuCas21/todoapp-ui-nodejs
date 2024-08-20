import { useState, useRef, useEffect } from 'react';
import './TaskElement.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import axios from 'axios';

// COMPONENTS
import EditInput from './EditInput';

const TaskElement = ({ taskElement, todoAPIHandler }) => {
    const [isOpen, setIsOpen] = useState(false);

    const taskParagraph = useRef(null);

    const apikey = process.env.REACT_APP_API_URL;

    const iconStyle = {
        margin: '0 8px',
        fontSize: '20px',
        cursor: 'pointer'
    };

    const openEditInputHandler = () => {
        setIsOpen(!isOpen);
    };

    const deleteTaskHandler = async () => {
        await axios.delete(`${apikey}${taskElement._id}`);
        todoAPIHandler();
    }

    const checkTaskHandler = (e) => {
        if (e.target.checked) {
            taskParagraph.current.style.textDecoration = 'line-through';
        } else {
            taskParagraph.current.style.textDecoration = 'none';
        }
    }

    useEffect(() => {
        taskParagraph.current.style.color = '#000000';
    }, []);

    return (
        <div className="task_element">
            {!isOpen && <input onClick={(e) => checkTaskHandler(e)} type="checkbox" name="check_task"/>}
            {isOpen ? <EditInput taskElement={taskElement} todoAPIHandler={todoAPIHandler} setIsOpenHandler={setIsOpen}/> : <p ref={taskParagraph} style={{ fontSize: '17px', margin: '0 8px' }}>{taskElement.name}</p>}
            <div className="task_btns">
                <MdOutlineModeEdit onClick={() => openEditInputHandler()} style={iconStyle}/>
                <RiDeleteBin6Line onClick={() => deleteTaskHandler()} style={iconStyle}/>
            </div>
        </div>
    )
}

export default TaskElement;