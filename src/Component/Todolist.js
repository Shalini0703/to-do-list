import React, {Component} from 'react';
import './Todolist.css';
import TaskEntering from './TaskEntering';
import Task from './Task';

class Todolist extends Component{
    state = {
        displayTask : [],
        taskName : '',
        taskDate : '',
        taskTime : ''
    }

    ChangeValue = (event) =>{   
        this.setState ({
            [event.target.name] : event.target.value
        })
    }

    displayTask = () => {
        let displayTask = [...this.state.displayTask];
        let currentTask = {taskName: this.state.taskName, taskDate: this.state.taskDate, taskTime:this.state.taskTime};
        
        displayTask.push(currentTask);

        this.setState(
            {
            displayTask: displayTask
            }
        );
    }

    deleteTask = (id) => {

        let displayTask = [...this.state.displayTask];
        displayTask.splice(id,1);
        this.setState(
            {
                displayTask:displayTask
            }
        )
    }

    render(){

        let TaskList = '';

        TaskList = (
            this.state.displayTask.map((listofTask,index) =>{
                return <Task taskName = {listofTask.taskName} 
                taskDate = {listofTask.taskDate} 
                taskTime={listofTask.taskTime}
                complete = {this.deleteTask.bind(this,index)}
                />
            })
        );

        return(
            <div className="Todolist">
                <h1 className = "heading">To Do List</h1>
                <p> Enter your task below !!!!</p>
                <TaskEntering click = {this.displayTask} change = {(event)=>this.ChangeValue(event)}
                />
                <p className = "TaskList">Your Tasks !!!</p>
                {TaskList}
            </div>
        );
    }
}

export default Todolist;