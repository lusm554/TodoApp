import React, { Component } from 'react';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {tasks: []}

        this.handleToggleChange = this.handleToggleChange.bind(this)
    }

    componentDidMount() {
        fetch('/api/tasks')
            .then(res => res.json())
            .then(tasks => {
                this.setState({tasks: tasks })
            })
    }

    handleToggleChange(e) {
        // this.setState({tasks: this.statet.tasks})

        console.log(e.done)

        // fetch(`change/`)
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
                    </li>
                })}
            </ul>
        )
    }
}

export default TaskList;