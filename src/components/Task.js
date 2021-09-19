import React from 'react'
import { FaTimes} from "react-icons/fa";
import { BiCheckbox, BiCheckboxChecked} from "react-icons/bi";
const Task = ({ task, onDelete, onToggleReminder , onToggleTaskCompleted}) => {
    return (
        <div className="task" >  
            <div className="ch-task-columns">
                <div className={`task ${task.reminder ? 'reminder': ""}`} onDoubleClick={ () => onToggleReminder(task.id) }  >
                    <h3>
                        {task.text} 
                    </h3>
                    <p>{task.day}</p>
                </div>
                <div className="ch-checkbox">
                    { task.completed ? 
                    <BiCheckboxChecked style={{color: 'green'}} size={40} onClick={() => onToggleTaskCompleted(task.id) }/>: 
                    <BiCheckbox size={40} onClick={() => onToggleTaskCompleted(task.id) }/>}   
                </div>
                <div className="ch-delete-task">
                    <FaTimes  style={{ color: 'red', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)}/>
            </div>
            </div>
            
   
        </div>
    )
}

export default Task
