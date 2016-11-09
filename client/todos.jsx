import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Todo extends React.Component {
  render() {
    return (
      <li>
        <input data-id={"todo-"+this.props.id} type="checkbox" checked={this.props.completed} onChange={this.props.handleChange} />{this.props.name}
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

  updateTodo(id) {
    var current_todo = this.state.data.filter(function(todo){
      return todo.id == id;
    })[0];

    current_todo.completed = !current_todo.completed;
    console.log(current_todo.id);

    $.ajax({
      url: "http://localhost:8000/todo/" + current_todo.id + "/",
      type: 'PUT',
      data: "id=" + current_todo.id + "&completed=" +  current_todo.completed + "&name=" + current_todo.name,
      success: function(data) {
	var todos = this.state.data.map(function(todo, index){
	  if (todo.id == id) {
	    return current_todo
          } else {
	    return todo
	  }
        });	
	this.setState({data: todos})
      }.bind(this)
    });
  }

  render() {
    if (this.state.data) {
      var todos = this.state.data.map(function(todo, index){
	return <Todo id={todo.id} name={todo.name} completed={todo.completed} handleChange={this.updateTodo.bind(this, todo.id)} key={todo.id} />;
      }.bind(this));
    }
    return (
      <ul>
        {todos}
      </ul>
    );
  }
}
