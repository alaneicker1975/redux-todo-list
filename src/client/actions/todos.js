import {
  FETCH_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_MESSAGE,
} from '../constants/action-types';

const fetchContentType = 'application/json; charset=UTF-8';

// Action Creators
// ------------------------------------------------------------------------

const setMessage = (text) => ({
  type: SET_MESSAGE,
  payload: { type: 'error', text },
});

const getTodosSuccess = (data) => ({ type: FETCH_TODOS, payload: data });

const addTodoSuccess = (insertId, data) => ({
  type: ADD_TODO,
  payload: { id: insertId, ...data },
});

const updateTodoSuccess = (id, data) => ({
  type: UPDATE_TODO,
  payload: { id, data },
});

const deleteTodoSuccess = (id) => ({ type: DELETE_TODO, payload: { id } });

// Thunks
// ------------------------------------------------------------------------

// GET
export const getTodos = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:4000/api/todos');
    const { err, data } = await res.json();

    if (err) throw new Error(err);

    dispatch(getTodosSuccess(data));
  } catch (err) {
    dispatch(setMessage(err.message));
  }
};

// PUT
export const addTodo = (data) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:4000/api/todos/`, {
      method: 'PUT',
      headers: {
        'Content-type': fetchContentType,
      },
      body: JSON.stringify(data),
    });

    const { insertId, err } = await res.json();

    if (err) throw new Error(err);

    dispatch(addTodoSuccess(insertId, data));
  } catch (err) {
    dispatch(setMessage(err.message));
  }
};

// PATCH
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

    if (err) throw new Error(err);

    dispatch(updateTodoSuccess(id, data));
  } catch (err) {
    dispatch(setMessage(err.message));
  }
};

// DELETE
export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:4000/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': fetchContentType,
      },
    });

    const { err } = await res.json();

    if (err) throw new Error(err);

    dispatch(deleteTodoSuccess(id));
  } catch (err) {
    dispatch(setMessage(err.message));
  }
};
