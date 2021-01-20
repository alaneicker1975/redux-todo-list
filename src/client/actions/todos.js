import {
  FETCH_TODOS,
  FETCH_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  UPDATE_TODO_STATUS,
  SET_MESSAGE,
} from '../constants/action-types';

const fetchContentType = 'application/json; charset=UTF-8';

// GET: Todos
// ------------------------------------------------------------------------
export const getTodos = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:4000/api/todos');
    const { err, data } = await res.json();

    if (err) {
      dispatch({ type: SET_MESSAGE, payload: { type: 'error', text: err } });
    }

    dispatch({ type: FETCH_TODOS, payload: data });
  } catch (err) {
    // dispatch error
  }
};

// GET: Todo
// ------------------------------------------------------------------------
export const getTodo = (id) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/${id}`)
    .then((res) => res.json())
    .then((todo) => dispatch({ type: FETCH_TODO, payload: todo }))
    .catch((err) => {});
};

// PUT: Todo
// ------------------------------------------------------------------------
export const addNewTodo = (reqBody) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/`, {
    method: 'PUT',
    headers: {
      'Content-type': fetchContentType,
    },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then(() => dispatch({ type: ADD_TODO, payload: reqBody }))
    .catch((err) => {});
};

// PATCH: Todo
// ------------------------------------------------------------------------
export const updateTodo = (reqBody) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': fetchContentType,
    },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then(() => dispatch({ type: UPDATE_TODO, payload: reqBody }))
    .catch((err) => {});
};

// DELETE: Todo
// ------------------------------------------------------------------------
export const deleteTodo = (reqBody) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': fetchContentType,
    },
  })
    .then((res) => res.json())
    .then(() => dispatch({ type: DELETE_TODO, reqBody }))
    .catch((err) => {});
};

// Patch: Todo status
// ------------------------------------------------------------------------
export const updateTodoStatus = (reqBody) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': fetchContentType,
    },
    body: JSON.stringify(reqBody),
  })
    .then((res) => res.json())
    .then(() => dispatch({ type: UPDATE_TODO_STATUS, payload: reqBody }))
    .catch((err) => {});
};
