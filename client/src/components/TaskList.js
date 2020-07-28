import React, { Component } from 'react';
import Popup from './Popup';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {tasks: [], showPopup: false}

        this.handleToggleChange = this.handleToggleChange.bind(this)
        this.getTasks = this.getTasks.bind(this)
        this.handleClickDelete = this.handleClickDelete.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
    }

    componentDidMount() {
        this.getTasks()
    }

    getTasks() {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(tasks => {
                this.setState({tasks: tasks})
            })
    }

    handleToggleChange({done, _id}) {
        fetch(`/api/change/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"done": !done})
        })
            .then(this.getTasks)
    }

    handleClickDelete({_id}) {
        fetch(`/api/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(this.getTasks)
    }

    handleChangeTask({_id}, {title, task}) {
        fetch(`/api/change/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, task})
        })
            .then(res => {
                console.log(res);
                this.setState(({showPopup}) => ({showPopup: !showPopup}))
            })
    }

    togglePopup() {
        this.setState(({showPopup}) => ({showPopup: !showPopup}))
    }

    render() {
        const { tasks } = this.state

        return (
            <ul>
                {tasks.map(( {title, _id, task, done} ) => {
                    return <li key={_id}>
                        <h1>{title}</h1>
                        <p>{task}</p>
                        <input 
                          type="checkbox" 
                          checked={done} 
                          onChange={() => this.handleToggleChange({done, _id})}
                        />
                        <input 
                          type="button"
                          value="delete"
                          onClick={() => this.handleClickDelete({_id})}
                        />
                        <input 
                          type="button"
                          value="change"
                          onClick={this.togglePopup}
                        />
                        {this.state.showPopup && 
                          <Popup text="close" closePopup={this.handleChangeTask.bind(this, {_id})} togglePopup={this.togglePopup}/> }
                    </li>
                })}
            </ul>
        )
    }
}


export default TaskList;