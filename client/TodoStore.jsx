import alt from "./alt";
import TodoActions from "./TodoActions";
import TodoSource from "./TodoSource";

class TodoStore {
  constructor() {
    this.state = {
      todos: [],
      pushing: 0,
      // keyed by pk
      editing: null,
      updating: {},
      deleting: {},
      errorMessage: null
    };
    this.bindActions(TodoActions);
    this.registerAsync(TodoSource);
  }

  onStartEdit(pk) {
    this.setState({
      editing: pk
    });
  }

  onStopEdit() {
    this.setState({
      editing: null
    });
  }

  onUpdateTodos(request) {
    this.setState({
      todos: request.data
    });
  }

  onFailToFetchTodos() {
    this.setState({
      errorMessage: "Todo list unavailable! :("
    });
  }

  onAddTodo(title) {
    var newItem = {
      title: title,
      completed: false
    };
    var newTodos = this.state.todos.concat(newItem);
    this.setState({
      todos: newTodos,
      pushing: newTodos.length
    });
    this.getInstance().addTodo(newItem);
  }

  onAddedTodo(response) {
    const data = response.data;
    var newTodos = this.state.todos.slice();
    newTodos[this.state.todos.length - 1] = data;
    this.setState({
      pushing: null,
      errorMessage: null,
      todos: newTodos
    });
  }

  onFailedToAddTodo() {
    var revisedTodos = this.state.todos.slice(1, this.state.todos.length);
    this.setState({
      todos: revisedTodos,
      pushing: this.state.pushing--,
      errorMessage: "Failed to add item!"
    });
  }

  onUpdateTodo(tuple) {
    var item = tuple[0], index = tuple[1];
    var updatedTodos = this.state.todos.slice();
    updatedTodos[index] = item;
    var updating = Object.assign({}, this.state.updating);
    updating[index] = this.state.todos[index];
    this.setState({
      todos: updatedTodos,
      updating: updating,
      editing: null,
      errorMessage: null
    });
    this.getInstance().updateTodo(item);
  }

  onUpdatedTodo(index) {
    var updating = Object.assign({}, this.state.updating);
    delete updating[index];
    this.setState({
      updating: updating,
      errorMessage: null
    });
  }

  onFailedToUpdateTodo(index) {
    var item = this.state.updating[index];
    var items = this.state.todos.slice();
    items[index] = item;
    var updating = Object.assign({}, this.state.updating);
    delete updating[index];
    this.setState({
      todos: items,
      updating: updating,
      errorMessage: "Failed to update item!"
    });
  }

  onDeleteTodo(index) {
    var deleting = Object.assign({}, this.state.deleting);
    const item = this.state.todos[index];
    deleting[index] = item;
    var items = this.state.todos.slice();
    items.splice(index, 1);
    this.setState({
      deleting: deleting,
      todos: items
    });
    this.getInstance().deleteTodo(item);
  }

  onDeletedTodo(index) {
    var deleting = Object.assign({}, this.state.deleting);
    delete deleting[index];
    this.setState({
      deleting: deleting
    });
  }
}

export default alt.createStore(TodoStore, 'TodoStore');
