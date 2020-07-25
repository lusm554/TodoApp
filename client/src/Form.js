import React, { Component } from 'react';


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {list: [], value: ''}
    }

    hadleChange(e) {
        this.setState({value: e.target.value})
    }

    hadleClick(e) {
        this.setState(state => ({
            list:   [...state.list, state.value]
        }))

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Task:<br/>
                        <input 
                        type="text" 
                        value={this.state.value} 
                        onChange={this.hadleChange.bind(this)} 
                        placeholder='hui'
                        />
                    </label>

                    <input 
                    type='submit' 
                    onClick={this.hadleClick.bind(this)} 
                    value='Add to list'
                    />
                </form>
                <TodoList toDoList={this.state.list}/>
            </div>
        )
    }
}

class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.toDoList.map((item, i)=> {
                        return <li key={i+1} >{item}</li>
                    })
                }
            </ul>
        )
    }
}

export default List;