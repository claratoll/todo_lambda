const { sendResponse } = require('../responses/sendResponse');

function deleteTodo(todoId, todos) {
  // Ta bort en todo
  const index = todos.findIndex((todo) => todo.id === todoId);

  if (index !== -1) {
    todos.splice(index, 1);
    return sendResponse(200, { message: 'todo deleted' });
  } else {
    return sendResponse(404, { message: 'todo not found' });
  }
}

module.exports = { deleteTodo };
