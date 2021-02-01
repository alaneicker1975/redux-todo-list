import store from '../store';
import actions from './action-creators';

const baseUrl = process.env.BASE_URL;

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

export const fetchGet = () => (dispatch) => {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then(({ data }) => dispatch(actions.setTodos(data)))
    .catch((err) => dispatch(setMessage(err.message)));
};

export const fetchPut = (todo) => (dispatch) => {
  return fetch(baseUrl, {
    method: 'PUT',
    headers,
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then(({ insertId }) =>
      dispatch(actions.addTodo({ id: insertId, ...todo })),
    )
    .catch((err) => dispatch(setMessage(err.message)));
};

export const fetchPatch = (todo) => (dispatch) => {
  return fetch(`${baseUrl}${todo.id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(todo.data),
  })
    .then((res) => res.json())
    .then(() => dispatch(actions.updateTodo(todo)))
    .catch((err) => dispatch(setMessage(err.message)));
};

export const fetchDelete = (id) => (dispatch) => {
  fetch(`${baseUrl}${id}`, {
    method: 'DELETE',
    headers,
  })
    .then((res) => res.json())
    .then(() => dispatch(actions.deleteTodo(id)))
    .catch((err) => dispatch(setMessage(err.message)));
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
