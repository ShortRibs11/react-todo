import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems.js';

class App extends Component {
  
  // App Component Constructor
  constructor() {
    super();
    
    this.inputElement = React.createRef();
    
    this.state = {
      // Holds all items in the ToDo List
      items: [],
      // Holds the current item's text and unique key
      currentItem: {text: '', key: '', complete: false },
    };
    
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  // Add an item to the list
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      // Add the complete flag, set to 'false'
      newItem.complete = false;
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '', complete: false }
      });
    }
  }
  
  // Handle Input
  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now() };
    this.setState({
      currentItem,
    });
  }
  
  toggleComplete = key => {
    const updatedItems = this.state.items.map(item => {
      if (item.key === key) {
        // Toggle whether the item is complete
        return {...item,
                complete: (!item.complete),
        };
      } else {
        return item;
      }
    });
    console.log(updatedItems);
    this.setState({
      items: updatedItems,
    });
  }
  
  getActiveItems = i => {
    return (i.complete === false);
  }
  
  getDoneItems(i) {
    return (i.complete === true);
  }
  
  // Render the App to the Browser
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem}
                  inputElement={this.inputElement}
                  handleInput={this.handleInput}
                  currentItem={this.state.currentItem}
        />
        Active Items:
        <br/>
        <TodoItems listName="ActiveList" entries={this.state.items.filter((i) => i.complete === false)} deleteItem={this.toggleComplete} />
        <br/>
        Completed Items:
        <br/>
        <TodoItems listName="DoneList" entries={this.state.items.filter((i) => i.complete === true)} deleteItem={this.toggleComplete} />
      </div>
    );
  }
}

export default App;
