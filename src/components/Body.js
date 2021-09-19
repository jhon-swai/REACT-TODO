import AddTask from "./AddTask"
import NoTask from "./NoTask"
import Tasks from "./Tasks"
import About from "./About"
import { Route, Switch} from "react-router-dom"
const Body = ({onAddTask, tasks, onDelete, onToggleReminder, onToggleTaskCompleted}) => {
    return (
        <div>
            <Switch>
                
                <Route exact path="/">
                {  
                    tasks.length === 0 ? <NoTask />
                    :<Tasks tasks={tasks} onDelete={onDelete} onToggleReminder={onToggleReminder} onToggleTaskCompleted={onToggleTaskCompleted}/>
                }
                </Route>
                    
               
                <Route path="/addTask">
                    <AddTask onAddTask={onAddTask}/>
                </Route> 

                <Route path="/about">
                    <About />
                </Route>              
            </Switch>   
        </div>
    )
}

export default Body
