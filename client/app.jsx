import React from 'react';
import ReactDOM from 'react-dom';
// import AltContainer from "alt-container";
// import classNames from "classnames";
// import TodoActions from "./TodoActions";
// import TodoStore from "./TodoStore";

class TodoForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    var newTodo = event.target['new-todo'];
    TodoActions.addTodo(newTodo.value);
    newTodo.value = '';
  }

  render() {
    return (
      <form className="todo-form" action="" method="post" onSubmit={this.handleSubmit}>
	<input type="text" name="new-todo" id="new-todo" placeholder="What do you need to do?"/>
      </form>
    );
  }
}

class TodoItem extends React.Component {
  constructor() {
    super();
    this.handleCompletedChange = this.handleCompletedChange.bind(this);
    this.handleTitleKeyUp = this.handleTitleKeyUp.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleStartEdit = this.handleStartEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // focus on editing change
  componentDidUpdate(prevProps) {
    if (this.props.editing && !prevProps.editing) {
      var node = ReactDOM.findDOMNode(this.refs.editTitle);
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }

  handleStartEdit(event) {
    this.props.onEdit(this.props.data.id);
    event.preventDefault();
  }

  handleCompletedChange(event) {
    const data = Object.assign({}, this.props.data, {completed: event.target.checked});
    TodoActions.updateTodo(data, this.props.index);
  }

  handleTitleChange(event) {
    var val = event.target.value;
    // if nothing changed, just deactivate
    if (val === this.props.data.title) {
      TodoActions.stopEdit();
    }
    else {
      const data = Object.assign({}, this.props.data, {title: val});
      TodoActions.updateTodo(data, this.props.index);
    }
  }

  handleTitleKeyUp(event) {
    switch (event.which) {
      // enter
      case 0x0d:
        this.handleTitleChange(event);
        break;
      // escape
      case 0x1b:
        TodoActions.stopEdit();
        break;
    }
  }

  handleDelte(event) {
    TodoActions.deleteTodo(this.props.index);
  }

  render() {
    const data = this.props.data;
    var titleElement;
    // render input or div
    if (this.props.editing) {
      titleElement = <input type="text" name="edit-title" defaultValue={data.title}
                            ref="editTitle" onKeyUp={this.handleTitleUp} onBlur={this.handleTitleChange}/>;
    }
    else {
      titleElement = <div className="title" onDoubleClick={this.handleStartEdit}>{data.title}</div>;
    }
    const klass = classNames('todo-item', {completed: data.completed});
    return (
      <li className={klass}>
        <input name="completed" type="checkbox"
               defaultChecked={data.completed} onChange={this.handleCompletedChange}/>
        {titleElement}
        <button className="delete" onClick={this.handleDelete}></button>
      </li>
    );
  }
}

class TodoList extends React.component {
  /*
  editTodo(index) {
    TodoActions.startEdit(index);
  }

  render() {
    var errorMessage = '';
    if (this.props.errorMessage !== null) {
      errorMessage = (<div className="error">{this.props.errorMessage}</div>);
    }
    var todos = this.props.todos.map((todo, i) => {
      const key = "todo-" + i;
      const data = Object.assign({}, todo);
      return (
	<TodoItem key={key} data={todo} index={i} editing={todo.id === this.props.editing}
                  onEdit={this.editTodo.bind(this)}/>
      );
    });
    return (
      <div className="todo-list">
	<h1>To-do List</h1>
        {errorMessage}
        <TodoForm />
        <ul className="todos">     
	  {todos}	
	</ul>
      </div>
    );
  }
  */
  render() {
    return (
      <h1>hello world.</h1>
    );
  }
}

class TodoApp extends React.Component {
  componentDidMount() {
    TodoStore.fetchTodos();
  }

  render() {
    return (
      <AltContainer store={TodoStore}>
        <TodoList />
      </AltContainer>
    )
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('todo')
);
