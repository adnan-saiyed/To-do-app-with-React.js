import React ,{useContext} from "react";
import { AppContext } from "../Context";
import CompletedTask from "./CompletedTask"
const CompletedTaskList = () => {
    const {completedTask} = useContext(AppContext)
    return (
        <div className="to-do-list">
            <h3 className="title">Completed tasks:</h3>
            {
                completedTask.map(task => <CompletedTask key={Math.random()} task={task}/>)
            }
        </div>
    )
}
export default CompletedTaskList