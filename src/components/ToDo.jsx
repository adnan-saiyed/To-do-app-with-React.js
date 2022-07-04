import React, { useContext } from "react";
import { AppContext } from "../Context";
const ToDo = ({task,index}) => {
    const {manageTask} = useContext(AppContext)
    const removeTask = () => {
        manageTask('REMOVE_TASK',{taskId: task.id})
    }
    const addCompletedTask = () => {
        manageTask('COMPLETED_TASK',{completedTask: task})
    }
    return (
        <div className="container">
            <p className="task">{index}. {task.task}</p>
            <div>
                <button className="remove-btn" onClick={removeTask}>X</button>
                <button className="remove-btn" onClick={addCompletedTask}>&#10004;</button>
            </div>
            
        </div>
    )
}
export default ToDo