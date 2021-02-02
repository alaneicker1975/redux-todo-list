import actions from './action-creators';
import handleAsync from '../utilities/handleAsync';

const baseUrl = process.env.BASE_URL;

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

export const fetchGet = () => (dispatch) =>
  handleAsync(fetch(baseUrl)).then(({ data }) =>
    dispatch(actions.setTodos(data)),
  );

export const fetchPut = (todo) => (dispatch) =>
  handleAsync(
    fetch(baseUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify(todo),
    }),
  ).then(({ insertId }) =>
    dispatch(actions.addTodo({ id: insertId, ...todo })),
  );

export const fetchPatch = (todo) => (dispatch) =>
  handleAsync(
    fetch(`${baseUrl}${todo.id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(todo.data),
    }),
  ).then(() => dispatch(actions.updateTodo(todo)));

export const fetchDelete = (id) => (dispatch) =>
  handleAsync(
    fetch(`${baseUrl}${id}`, {
      method: 'DELETE',
      headers,
    }),
  ).then(() => dispatch(actions.deleteTodo(id)));
