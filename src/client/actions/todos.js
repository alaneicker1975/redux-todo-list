import { createActions } from 'redux-actions';
import store from '../store';

export const todoActions = createActions({
  SET_TODOS: (payload) => payload,
  ADD_TODO: (payload) => payload,
  UPDATE_TODO: (payload) => payload,
  DELETE_TODO: (payload) => payload,
  SET_MESSAGE: (payload) => payload,
  FETCH_GET: (payload) => payload,
  FETCH_PUT: (payload) => payload,
  FETCH_PATCH: (payload) => payload,
  FETCH_DELETE: (payload) => payload,
});

export const fetchGet = () => {
  store.dispatch(todoActions.fetchGet());
};

export const fetchPut = (todo) => {
  store.dispatch(todoActions.fetchPut(todo));
};

export const fetchPatch = (todo) => {
  store.dispatch(todoActions.fetchPatch(todo));
};

export const fetchDelete = (id) => {
  store.dispatch(todoActions.fetchDelete(id));
};

export const setMessage = (text) => {
  store.dispatch(todoActions.setMessage({ type: 'error', text }));
};

export const setTodos = (todo) => {
  store.dispatch(todoActions.setTodos(todo));
};

export const addTodo = (insertId, data) => {
  store.dispatch(todoActions.addTodo({ id: insertId, ...data }));
};

export const updateTodo = (id, data) => {
  store.dispatch(todoActions.updateTodo({ id, data }));
};

export const deleteTodo = (id) => {
  store.dispatch(todoActions.deleteTodo(id));
};
