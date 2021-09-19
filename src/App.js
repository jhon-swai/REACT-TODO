import React from 'react'
import { useState, useEffect } from "react"
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  const [tasks, setTasks] = useState("")


  useEffect(() => {
    
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()
  }, [])

  // fetch task from server 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:3001/tasks');
    const data = await res.json()
    return data
  }

   // fetch task from server 
   const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`);
    const data = await res.json()
    return data
  }
  // Add task
  const addTask = async (task) => {

    const res = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    // returns the new task that was added 
    const data = await res.json()

    // add it to the ui
    setTasks([...tasks, data])
  }

  const onToggleTaskCompleted =async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, completed: !taskToToggle.completed}

    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await res.json()

    setTasks(
      tasks.map( (task) =>  task.id === id ? {...task, completed: data.completed} : task)
    )
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id))
    
  }

  // Toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'PUT',
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()
    
    setTasks(
      tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder } : task )
    );
  }

  return (
      <Router>

      <div className="container">
        <Header title="Task Tracker"/>
        <Body onAddTask={addTask} tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} 
        onToggleTaskCompleted={onToggleTaskCompleted}/>         
        <Footer />      
      </div>
      </Router>
  );
}

export default App;
