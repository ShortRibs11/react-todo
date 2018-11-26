import React, { Component } from 'react';
import './App.css';
import './index.css';

class TodoItems extends Component {
    
  createTasks = item => {
    //check if this is the active list or the done list
    if (item.complete===false) {
      return (
          <li key={item.key}>
              <input type='checkbox'
              onClick={() => this.props.deleteItem(item.key)}
              ></input>
              {item.text}
          </li>
      );
    } else {
      return (
        <li key={item.key}>
            <input type='checkbox'
            onClick={() => this.props.deleteItem(item.key)}
            checked
            ></input>
            {item.text}
        </li>
      );
    }
  }
  
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (<ul id={this.props.listName} className="theList">{listItems}</ul>);
  }
  
}

export default TodoItems;