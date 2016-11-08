import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Todo extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" value={this.props.completed} />{this.props.name}
      </li>
    );
  }
}

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.getTodos();
  }  

  getTodos() {
    $.ajax({
      url: "http://localhost:8000/todo/",
      datatype: "json",
      cache: false,
      success: function(data) {
	this.setState({data: data});
      }.bind(this)
    })
  }

  render() {
    if (this.state.data) {
      var todos = this.state.data.map(function(todo, index){
	return <Todo name={todo.name} completed={todo.completed} key={todo.id} />;
      })
    }
    return (
      <ul>
        {todos}
      </ul>
    );
  }
}
