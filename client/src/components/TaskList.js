import React, { Component } from 'react';
import Popup from './Popup';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {tasks: [], showPopup: false, currentId: ''}

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

    handleChangeTask({title, task}) {
        fetch(`/api/change/${this.state.currentId}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, task})
        })
            .then(() => {
                this.setState(({showPopup}) => ({showPopup: !showPopup}))
            })
            .then(this.getTasks)
    }

    togglePopup(e) {
        let id = e.target.id

        this.setState(({showPopup}) => ({showPopup: !showPopup, currentId: id}))
    }

    render() {
        const { tasks } = this.state

        return (
            <ul>
                {tasks.map(( {title, _id, task, done} ) => {
                    return <li key={_id} style={{margin: '10px'}}>
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
                          style={{margin: '5px'}}
                        />
                        <input 
                          type="button"
                          value="change"
                          id={_id}
                          onClick={this.togglePopup}
                        />
                        {this.state.showPopup && 
                          <Popup 
                          text="close" 
                          handleChangeTask={this.handleChangeTask.bind(this)} 
                          togglePopup={() => this.setState(state => ({showPopup: !state.showPopup}))}
                        />}
                    </li>
                })}
            </ul>
        )
    }
}


export default TaskList;