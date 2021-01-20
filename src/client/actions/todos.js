import {
  FETCH_TODOS,
  FETCH_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from '../constants/action-types';

const fetchContentType = 'application/json; charset=UTF-8';

// GET: Todos
// ------------------------------------------------------------------------

export const setTodos = (payload) => ({ type: FETCH_TODOS, payload });

export const fetchTodos = () => (dispatch) => {
  fetch('http://localhost:4000/api/todos')
    .then((res) => res.json())
    .then((todos) => dispatch(setTodos(todos)))
    .catch(() => {});
};

// GET: Todo
// ------------------------------------------------------------------------

export const setTodo = (payload) => ({ type: FETCH_TODO, payload });

export const fetchTodo = (id) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/${id}`)
    .then((res) => res.json())
    .then((todo) => dispatch(setTodo(todo)))
    .catch(() => {});
};

// PUT: Todo
// ------------------------------------------------------------------------
export const addTodo = (payload) => ({ type: ADD_TODO, payload });

export const putTodo = (todo) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/`, {
    method: 'PUT',
    headers: {
      'Content-type': fetchContentType,
    },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then(() => dispatch(addTodo(todo)))
    .catch(() => {});
};

// PATCH: Todo
// ------------------------------------------------------------------------
export const updateTodo = (payload) => ({ type: UPDATE_TODO, payload });

export const patchTodo = (todo, id) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': fetchContentType,
    },
    body: JSON.stringify({ todo, id }),
  })
    .then((res) => res.json())
    .then(() => dispatch(updateTodo(todo)))
    .catch(() => {});
};

// DELETE: Todo
// ------------------------------------------------------------------------
export const removeTodo = (payload) => ({ type: DELETE_TODO, payload });

export const deleteTodo = (id) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': fetchContentType,
    },
  })
    .then((res) => res.json())
    .then(() => dispatch(removeTodo({ id })))
    .catch(() => {});
};
