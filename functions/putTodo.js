const { sendResponse } = require('../responses/sendResponse');

function putTodo(id, todos) {
  const intID = parseInt(id);
  const todoToUpdate = todos.find((todo) => todo.id === intID);

  if (todoToUpdate) {
    todoToUpdate.check = true;
    return sendResponse(200, { message: 'Todo updated successfully' });
  } else {
    return sendResponse(404, { message: 'Todo not found' });
  }
}

module.exports = { putTodo };
