import {
  SET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_MESSAGE,
  FETCH_GET,
  FETCH_PUT,
  FETCH_PATCH,
  FETCH_DELETE,
} from '../constants/action-types';

export const fetchGet = () => ({ type: FETCH_GET });

export const fetchPut = (todo) => ({ type: FETCH_PUT, payload: todo });

export const fetchPatch = (id, data) => ({
  type: FETCH_PATCH,
  payload: { id, data },
});

export const fetchDelete = (id) => ({ type: FETCH_DELETE, payload: id });

export const setMessage = (text) => ({
  type: SET_MESSAGE,
  payload: { type: 'error', text },
});

export const setTodos = (data) => ({ type: SET_TODOS, payload: data });

export const addTodo = (insertId, data) => ({
  type: ADD_TODO,
  payload: { id: insertId, ...data },
});

export const updateTodo = (id, data) => ({
  type: UPDATE_TODO,
  payload: { id, data },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});
