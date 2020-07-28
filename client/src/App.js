import React, { Component } from 'react';
import TaskList from './components/TaskList';
import './index.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {title: '', task: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.taskListRef = React.createRef()
    }


    handleSubmit(e) {
        e.preventDefault()
        fetch('/api/newTask/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })  
            .then(this.taskListRef.current.getTasks)
            .then(this.setState({title: '', task: ''}))
    }

    render() {
        return (
            <div className="main">
                <form onSubmit={this.handleSubmit} className="form">
                    <label>
                        <h1>New task:</h1><br/>
                        <input 
                          type="text"
                          value={this.state.title}
                          onChange={(e) => this.setState({title: e.target.value})}
                          placeholder="this is title?"
                          className="title"
                        /><br/>
                        <textarea
                          value={this.state.task}
                          onChange={(e) => this.setState({task: e.target.value})}
                          placeholder="task here..."
                          className="task"
                        /><br/>
                        <input 
                          type="submit"
                          value="add"
                        />
                    </label>
                </form>
                <TaskList ref={this.taskListRef} className="taskList"/>
            </div>
        )
    }
}

export default App;
