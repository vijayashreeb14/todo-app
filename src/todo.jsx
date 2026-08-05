import {useState ,useRef} from "react";
import "./todo.css";

function ToDo()
{

    const [tasks, setTasks] = useState([]);

    const taskTextBox = useRef();
    const taskDescriptionBox = useRef();
    const taskKindBox = useRef();
    const taskDueDateBox = useRef();
    const taskDueTimeBox = useRef();

    

    function addTask()
    {
        const task={
        taskName:taskTextBox.current.value,      
        taskDescription:taskDescriptionBox.current.value,
        taskKind:taskKindBox.current.value,
        taskDueDate:taskDueDateBox.current.value,
        taskDueTime:taskDueTimeBox.current.value
        }

        setTasks([...tasks,task]);
        
    }


    return (<><header className="hero">
        My Todo List
        </header>
        
        <div className="main-container">
        <div className="row">
            <div className="item">
               <label>Add Task</label>
            </div>
            <div className="item">
                <input type="text" ref={taskTextBox} maxLength={100} placeholder="Please enter the task" title="Please enter the task"/>
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="item">
               <label>Add Description</label>
            </div>
            <div className="item">
                <textarea ref={taskDescriptionBox} placeholder="Please enter the description" title="Please enter the description"></textarea>
            </div>
        </div>

        <div className="row">
            <div className="item">
               <label>Task Kind</label>
            </div>
            <div className="item">
                <select ref={taskKindBox}>
                    <option>Personal</option>
                      <option>College</option>
                        <option>Shopping</option>
                        <option>Workout</option>
                </select>
            </div>
        </div>

        <div className="row">
            <div className="item">
               <label>Due Date</label>
            </div>
            <div className="item">
                <input type="date" ref={taskDueDateBox}/>
            </div>
        </div>

        <div className="row">
            <div className="item">
               <label>Due Time</label>
            </div>
            <div className="item">
                <input type="time" ref={taskDueTimeBox}/>
            </div>
        </div>
        <div className="row">
            <div className="item">
               
            </div>
            <div className="item">
                 <button onClick={addTask}>Add</button>
                    </div>
        </div>
        </div>

        

        <div className="task-list">
            {tasks.map((task,index)=>{
                return (<div key={index} className="task-container">
                    <div className="task-name">{task.taskName}</div>
                    <div className="task-description">{task.taskDescription}</div>
                    <div className="task-kind">{task.taskKind}</div>
                   <div className="task-footer">
    <div className="task-due-date">
        {task.taskDueDate}
    </div>

    <div className="task-due-time">
        {task.taskDueTime}
    </div>
</div>
                </div>)
            })}
        </div>
        

        </>)
}

export default ToDo;