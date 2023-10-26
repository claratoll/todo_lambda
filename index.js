const { sendResponse } = require('./responses/sendResponse');
const { deleteTodo } = require('./functions/deleteTodo.js');
const { putTodo } = require('./functions/putTodo.js');
const { postTodo } = require('./functions/postTodo.js');

var todos = [
  {
    id: 1,
    title: 'Buy groceries',
    date: '2023-10-26',
    check: false,
  },
  {
    id: 2,
    title: 'Finish homework',
    date: '2023-10-28',
    check: false,
  },
  {
    id: 3,
    title: 'Go for a run',
    date: '2023-10-27',
    check: true,
  },
];

exports.handler = async (event, context) => {
  const { method, path } = event.requestContext.http;

  if (method === 'GET' && path === '/todo') {
    return sendResponse(200, { todos });
  } else if (method === 'POST' && path === '/todo') {
    const body = JSON.parse(event.body);
    return postTodo(body, todos);
  } else if (method === 'PUT' && path.startsWith('/todo')) {
    const todoID = path.split('/todo/')[1];
    return putTodo(todoID, todos);
  } else if (method === 'DELETE' && path.startsWith('/todo/')) {
    const todoID = path.split('/todo/')[1];
    return deleteTodo(todoID, todos);
  }

  return sendResponse(400, { message: 'error' });
};
