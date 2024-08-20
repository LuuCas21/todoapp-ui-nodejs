import './TaskGallery.css';

// COMPONENTS
import TaskElement from './TaskElement';

const TaskGallery = ({ task, todoAPI }) => {
    return (
        <div className="task_gallery">
            {task.map(tasks => {
                return <TaskElement key={tasks._id} todoAPIHandler={todoAPI} taskElement={tasks}/>
            })}
        </div>
    )
}

export default TaskGallery;