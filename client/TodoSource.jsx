import axios from "axios";
import TodoActions from "./TodoActions";

export default {
  fetchTodo: {
    remote(state) {
      return axios.get('/todo/');
    },
    success: TodoActions.updateTodos,
    error: TodoActions.failedToFetchTodos
  },
  addTodo: {
    remote(state, item) {
      return axios.post('/todo/', {
        title: item.title,
        completed: item.completed
      });
    },
    success: TodoActions.addedTodo,
    error: TodoActions.FailedToAddTodo
  },
  updateTodo: {
    remote(state, item) {
      return axios.patch('/todo/' + item.id + '/', {
	title: item.title,
        completed: item.completed
      });
    },
    success: TodoActions.updatedTodo,
    error: TodoActions.FailedToUpdateTodo
  },
  deleteTodo: {
    remote(state, item) {
      return axios.delete('/todo/' + item.id + '/');
    },
    success: TodoActions.deletedTodo,
    error: TodoActions.FailedToDeleteTodo
  }
}
