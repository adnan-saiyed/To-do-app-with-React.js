import React from "react";

const completedTask = ({task}) => {
    return(
        <div className="container">
            <p className="task">{task.task}</p>
        </div>
    )
}
export default completedTask