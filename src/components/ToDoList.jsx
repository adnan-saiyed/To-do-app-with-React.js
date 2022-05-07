import React , {useContext} from "react"
import ToDo from "./ToDo"
import { AppContext } from "../Context"
const ToDoList = () => {
    const {tasks} = useContext(AppContext)
    return (
        <div className="to-do-list">
            <h3 className="title">Your pending tasks:</h3>
            {
                tasks.map((task,index) => <ToDo  task={task} key={task.id} index={index+1}/>)
            }
        </div>
    )
}
export default ToDoList