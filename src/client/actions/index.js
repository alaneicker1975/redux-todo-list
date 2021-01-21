import { createActions, createAction } from 'redux-actions';
import store from '../store';

export const actions = createActions({
  SET_TODOS: (payload) => payload,
  ADD_TODO: (payload) => payload,
  UPDATE_TODO: (payload) => payload,
  DELETE_TODO: (payload) => payload,
  FETCH_GET: (payload) => payload,
  FETCH_PUT: (payload) => payload,
  FETCH_PATCH: (payload) => payload,
  FETCH_DELETE: (payload) => payload,
  SET_MESSAGE: (payload) => payload,
  CLEAR_MESSAGE: () => null,
});

export const fetchGet = () => {
  store.dispatch(actions.fetchGet());
};

export const fetchPut = (todo) => {
  store.dispatch(actions.fetchPut(todo));
};

export const fetchPatch = (todo) => {
  store.dispatch(actions.fetchPatch(todo));
};

export const fetchDelete = (id) => {
  store.dispatch(actions.fetchDelete(id));
};

export const setMessage = (text) => {
  store.dispatch(actions.setMessage({ type: 'error', text }));
};

export const clearMessage = () => {
  store.dispatch(actions.clearMessage());
};

export const setTodos = (todo) => {
  store.dispatch(actions.setTodos(todo));
};

export const addTodo = (insertId, data) => {
  store.dispatch(actions.addTodo({ id: insertId, ...data }));
};

export const updateTodo = (id, data) => {
  store.dispatch(actions.updateTodo({ id, data }));
};

export const deleteTodo = (id) => {
  store.dispatch(actions.deleteTodo(id));
};
