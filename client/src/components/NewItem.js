import React, { Component } from 'react';


class newItme extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {list: [], value: ''}
    // }

    // hadleChange(e) {
    //     this.setState({value: e.target.value})
    // }

    // hadleClick(e) {
    //     if(this.state.value === '') {
    //         e.preventDefault()
    //         return;
    //     }

    //     this.setState(state => ({
    //         list:   [...state.list, state.value]
    //     }))

    //     e.preventDefault()
    // }

    render() {
        const hadleChange = this.props.hadleChange;
        const hadleClick = this.props.hadleClick;

        return (
            <div>
                <form>
                    <label>
                        Task:<br/>
                        <input 
                        type="text" 
                        value={this.props.currentItem} 
                        onChange={hadleChange} 
                        placeholder='hui'
                        />
                    </label>

                    <input 
                    type='submit' 
                    onClick={hadleClick} 
                    value='Add to list'
                    />
                </form>
            </div>
        )
    }
}

export default newItme;