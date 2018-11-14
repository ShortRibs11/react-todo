import React, { Component } from 'react';
import './index.css';

// Tuturial at https://hackernoon.com/create-a-simple-todo-app-in-react-9bd29054566b

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus();
    }
    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input placeholder="Task"
                               ref={this.props.inputElement}
                               value={this.props.currentItem.text}
                               onChange={this.props.handleInput}
                        />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;