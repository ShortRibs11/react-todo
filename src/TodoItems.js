import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import './App.css';
import './index.css';

class TodoItems extends Component {
    
  createTasks = item => {
  	console.log(item.text);
  	
    let itemText = item.text;
    
  	let deleteButton="";
  	let radioButton =
  	  (<span onClick={()=>this.props.toggleComplete(item.key)}>
        <Icon left>radio_button_unchecked</Icon>
      </span>);
    
  	if (item.complete) {
  		deleteButton =(
    	  <span onClick={()=>this.props.deleteItem(item.key)}>
          <Icon right>delete</Icon>
        </span>);
  		radioButton =
  		  (<span onClick={()=>this.props.toggleComplete(item.key)}>
          <Icon left>radio_button_checked</Icon>
        </span>);
  	}
      return (
        <li key={item.key}>
            {radioButton}
            {itemText}
	        	{deleteButton}
        </li>
      );
  }
  
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (<ul id={this.props.listName} className="theList">{listItems}</ul>);
  }
  
}

export default TodoItems;