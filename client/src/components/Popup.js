import React, { Component } from 'react';
import './popup.css';

class Popup extends Component {
    constructor(props) {
        super(props)

        this.state = {changedTitle: '', changedTask: ''}
    }

    render() {
        const title = this.state.changedTitle, task = this.state.changedTask;

        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <form>
                        <label>
                            Change task:<br/>
                            <input 
                              placeholder='title...'
                              onChange={e => this.setState({changedTitle: e.target.value})}
                            /><br/>
                            <textarea 
                              placeholder='task...'
                              onChange={e => this.setState({changedTask: e.target.value})}
                            />
                        </label>
                    </form>
                    <button onClick={() => this.props.handleChangeTask({title, task})}>Submit</button>
                    <button onClick={() => this.props.togglePopup()}>Close</button>
                </div>
            </div>
        )
    }
}

export default Popup;