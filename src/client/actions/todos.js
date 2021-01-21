import {
  FETCH_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
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

// PUT: Todo
// ------------------------------------------------------------------------
export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:4000/api/todos/`, {
      method: 'PUT',
      headers: {
        'Content-type': fetchContentType,
      },
      body: JSON.stringify(data),
    });

    const { err } = await res.json();

    if (err) setError(dispatch, err);

    dispatch({ type: ADD_TODO, payload: data });
  } catch (err) {
    setError(dispatch, err.message);
  }
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
