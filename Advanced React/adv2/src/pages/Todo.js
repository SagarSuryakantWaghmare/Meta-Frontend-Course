import React, { useState } from 'react'

function Todo() {
    const [task, setTask] = useState("");
    const[tasks,setTasks]=useState([]);
    const AddTask = () => {
        try {
            if(task.trim()!==''){
                setTasks([...tasks,task]);
                setTask('');
            }
        }
        catch (error) {
            console.log(error)
        }
        console.log(tasks)
    }
    return (
        <> 
           <div>
            <h1>Todo</h1>
            <p>Add the task to complete it.</p>
            <input type="text" value={task} placeholder='Enter your task' onChange={(e) => setTask(e.target.value)} />
            <button onClick={AddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
        

        </>

    )
}

export default Todo