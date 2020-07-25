import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map((itme, i) => {
                    return <li key={i+1}>{itme}</li>
                })}
            </ul>
        )   
    }
}

export default List;