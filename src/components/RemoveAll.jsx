import React,{useContext} from "react";
import { AppContext } from "../Context";
const RemoveAll = () => {
    const {manageTask} = useContext(AppContext)
    const removeAllTask = () => {
        manageTask('REMOVE_ALL')
    }
    return(
        <button className="remove-all" onClick={removeAllTask}>Remove all tasks</button>
    )
}
export default RemoveAll