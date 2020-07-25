import React, { Component } from 'react';
import NewItem from './components/NewItem';
import List from './components/List';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {list: [], currentItem: ''}
  }

  hadleChange(e) {
    this.setState({currentItem: e.target.currentItem})
  }

  hadleClick(e) {
    if(this.state.currentItem === '') {
        e.preventDefault()
        return;
    }

    this.setState(state => ({
        list: [...state.list, state.currentItem]
    }))

    e.preventDefault()
  }

  render() {
    return (
      <div>
        <NewItem 
        hadleClick={this.hadleClick.bind(this)} 
        hadleChange={this.hadleChange.bind(this)}
        currentItem={this.state.currentItem}
        list={this.state.list}
        />
        <List list={this.state.list}/>
      </div>
    )
  }
}

export default App;
