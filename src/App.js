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
      currentItem: {text: '', key: ''},
    };
    
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  // Add an item to the list
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '' }
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
  
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    console.log(filteredItems);
    this.setState({
      items: filteredItems,
    });
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
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
