import alt from "./alt";

export default alt.generateActions(
  'fetchTodos', 'updateTodos', 'failedToFetchTodos',
  'addTodo', 'addedTodo', 'failedToAddTodo',
  'updateTodo', 'updatedTodo', 'failedToUpdateTodo',
  'deleteTodo', 'deletedTodo', 'failedToDeleteTodo',
  'startEdit', 'stopEdit'
);
