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

const setError = (dispatch, text) => {
  dispatch({ type: SET_MESSAGE, payload: { type: 'error', text } });
};

// GET: Todos
// ------------------------------------------------------------------------
export const getTodos = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:4000/api/todos');
    const { err, data } = await res.json();

    if (err) setError(dispatch, err);

    dispatch({ type: FETCH_TODOS, payload: data });
  } catch (err) {
    setError(dispatch, err.message);
  }
};

// GET: Todo
// ------------------------------------------------------------------------
export const getTodo = (id) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_TODO, payload: data }))
    .catch((err) => {});
};

// PUT: Todo
// ------------------------------------------------------------------------
export const addNewTodo = (data) => (dispatch) => {
  fetch(`http://localhost:4000/api/todos/`, {
    method: 'PUT',
    headers: {
      'Content-type': fetchContentType,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(() => dispatch({ type: ADD_TODO, payload: data }))
    .catch((err) => {});
};

// Patch: Todo status
// ------------------------------------------------------------------------
export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': fetchContentType,
      },
      body: JSON.stringify(data),
    });

    const { err } = await res.json();

    if (err) setError(dispatch, err);

    dispatch({ type: UPDATE_TODO, payload: { id, data } });
  } catch (err) {
    setError(dispatch, err.message);
  }
};

// DELETE: Todo
// ------------------------------------------------------------------------
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': fetchContentType,
      },
    });

    const { err } = await res.json();

    if (err) setError(dispatch, err);

    dispatch({ type: DELETE_TODO, payload: { id } });
  } catch (err) {
    setError(dispatch, err.message);
  }
};
