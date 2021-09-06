import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggleReminder, onToggleTaskCompleted}) => {
    return (
        <>
            {tasks.map((task) =>(
                <Task key={task.id} task={task} onDelete={onDelete} onToggleReminder={onToggleReminder} onToggleTaskCompleted={onToggleTaskCompleted}/>
            ) )}            
        </>
    )
}
export default Tasks
