import React from "react";

class TodoItems extends React.Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
        {item.text}
      </li>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <div className="container">
        <div className="list-holder">
          <ul className="theList">{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default TodoItems;
