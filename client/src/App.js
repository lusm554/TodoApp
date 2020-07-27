import React, { Component } from 'react';
import TaskList from './components/TaskList';

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
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        New task:<br/>
                        <input 
                          type="text"
                          value={this.state.title}
                          onChange={(e) => this.setState({title: e.target.value})}
                        /><br/>
                        <textarea
                          value={this.state.task}
                          onChange={(e) => this.setState({task: e.target.value})}
                        /><br/>
                        <input 
                          type="submit"
                          value="add"
                        />
                    </label>
                </form>
                <TaskList ref={this.taskListRef}/>
            </div>
        )
    }
}

export default App;
