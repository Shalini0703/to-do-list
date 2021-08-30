import React from 'react';
import './Task.css';

const task = (props) => {
    return (
        <div className = "task">
            <p>{props.taskName}</p>
            <p>{props.taskDate}, {props.taskTime}</p>  
            <p><input type="checkbox"/> : Under Progress</p>
            <button className ="taskButton" onClick = {props.complete}> Completed </button>
        </div>
    );
}

export default task;