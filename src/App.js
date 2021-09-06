import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"
import NoTask from './components/NoTask';
import Test from './components/Test';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor's appointment",
        day: "Feb 6th at 1:30pm",
        reminder: true,
        completed: true
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 5th at 1:30pm",
        reminder: true,
        completed: false,
    },
    {
        id: 3,
        text: "Food shopping",
        day: "Feb 8th at 1:30pm",
        reminder: true,
        completed: false,
    }    
])
  const onToggleTaskCompleted = (id) => {
    setTasks(
      tasks.map( (task) =>  task.id === id ? {...task, completed: !task.completed } : task)
    )
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder } : task )
    );
  }

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <AddTask />
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} onToggleTaskCompleted={onToggleTaskCompleted}/>) 
      :(<NoTask/>)}      
    </div>
  );
}

export default App;
