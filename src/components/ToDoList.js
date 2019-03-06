import React, { Component } from "react";

class ToDoList extends Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="container">
          <div className="header">
            <form onSubmit={this.props.addItem}>
              <input
                type="text"
                placeholder="Tasks"
                ref={this.props.inputElement}
                value={this.props.currentItem.text}
                onChange={this.props.handleInput}
              />
              <button type="submit">Add Task</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoList;
