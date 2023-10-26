const { sendResponse } = require('../responses/sendResponse');

function putTodo(id, todos) {
  const todoToUpdate = todos.find((todo) => todo.id === id);

  if (!todoToUpdate.check) {
    todoToUpdate.check = true;
    return sendResponse(200, { message: 'Todo updated successfully' });
  } else {
    return sendResponse(404, { message: 'Todo not found' });
  }
}

module.exports = { putTodo };
