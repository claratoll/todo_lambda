const { sendResponse } = require('../responses/sendResponse');

function checkTodoFormat(body) {
  const keys = Object.keys(body);

  if (body?.title && body?.date) {
    return true;
  } else {
    return false;
  }
}

function postTodo(body, todos) {
  if (checkTodoFormat(body)) {
    const maxId = Math.max(...todos.map((todo) => todo.id));
    const newIdNumber = maxId + 1;

    body.id = newIdNumber;
    body.check = false;
    todos.push(body);

    return sendResponse(200, { success: true });
  } else {
    return sendResponse(400, { message: 'wrong data in body' });
  }
}

module.exports = { postTodo };
