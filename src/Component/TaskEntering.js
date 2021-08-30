import React from 'react';
import './TaskEntering.css';

const TaskEntering =(props)=>{
    return(
        <div className = "TaskDiv">
            <p> New Task !!!! </p>
            <input name = "taskName" className = "NewTask" onChange = {props.change}/>
            <p>select Date</p>
            <input type = "date" name = "taskDate" onChange = {props.change} />
            <p>Select Time</p>
            <input type = "time" name = "taskTime" onChange = {props.change}/><br/><br/>
            <button className="newTaskButton" onClick = {props.click}>Submit</button>

        </div>
    );
}

export default TaskEntering;