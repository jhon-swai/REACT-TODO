import { useState } from "react"
const AddTask = ({onAddTask}) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const clearInputs = () => {
        setText("")
        setDay("")
        setReminder(false)
    }

    const onSubmit = (e) => {
        // prevent page submission
        e.preventDefault()

        if (!text) {
            alert("Please add a task")
            return
        }
        onAddTask({text, day, reminder})

        //clear the inputs 
        clearInputs()
    }

    

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save task" className="btn btn-block"></input>

        </form>
    )
}

export default AddTask
