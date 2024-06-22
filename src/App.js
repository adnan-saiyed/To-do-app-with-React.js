import React , {useState} from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import CompletedTaskList from './components/CompletedTaskList';
import { AppContext } from './Context';

function App(){
    const [tasks,setTasks] = useState([])
    const [completedTask,setCompletedTask] = useState([])
    const manageTask = (action,object) => {
        switch(action){
            case 'REMOVE_TASK':{
                setTasks(tasks.filter(task => task.id !== object.taskId))
                return
            }    
            case 'ADD_TASK':{
                if(object.newTask.task)
                setTasks([...tasks,object.newTask])
                return
            }
            case 'COMPLETED_TASK':
                setCompletedTask([...completedTask,object.completedTask])
                setTasks(tasks.filter(task => task.id !== object.completedTask.id))
                
                return
            case 'REMOVE_ALL':
                setCompletedTask([])
                setTasks([])
                return
            default:
        }
    }
    return (
        <div className='App'>
            <AppContext.Provider value={{tasks,manageTask,completedTask}}>
                <AddToDo/>
                <div className='app-container'>
                    <ToDoList/>
                    <CompletedTaskList/>
                </div>
            </AppContext.Provider>
        </div>
    )
}

export default App;