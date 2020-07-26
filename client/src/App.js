import React, { Component } from 'react';
import TaskList from './components/TaskList';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <TaskList />
            </div>
        )
    }
}

export default App;
