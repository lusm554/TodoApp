import React, { Component } from 'react';

class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {tasks: []}
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/tasks')
            .then(res => res.json())
            .then(tasks => {
                this.setState({tasks: tasks });
            })
    }

    render() {
        const { tasks } = this.state

        return (
            <ul>
                {tasks.map(( {title, _id, task, done} ) => {
                    return <li key={_id}>
                        <h1>{title}</h1>
                        <p>{task}</p>
                        <input type="checkbox" checked={true}/>
                    </li>
                })}
            </ul>
        )
    }
}

export default TaskList;