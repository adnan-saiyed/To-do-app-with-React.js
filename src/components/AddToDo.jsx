import React ,{useContext, useState} from "react"
import App from "../App"
import { AppContext } from "../Context"
import RemoveAll from "./RemoveAll"
const AddToDo = () => {
    const [task,setTask] = useState('')
    const {manageTask} = useContext(AppContext)
    const {tasks} = useContext(AppContext)
    
    const objMaker = () => {

        const obj = {
            task,
            id: Math.random()
        }
        
        manageTask('ADD_TASK',{newTask: obj})
        
    }
    return (
        <>  
            <h2 className="title">To do app</h2>
                <div className="add-to-do">
                <input type="text" placeholder="Enter your task here.." value={task}className="text-area"onChange={e => {setTask(e.target.value)}}></input>
                <span><button className="btn" onClick={objMaker}>+</button></span>
                <AppContext.Provider value={{manageTask}}>
                    <RemoveAll/>
                </AppContext.Provider>
                
            </div>
        </>
        
    )
}
export default AddToDo