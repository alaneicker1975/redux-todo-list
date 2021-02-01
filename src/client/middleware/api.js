import handleAsync from '../utilities/handleAsync';
import { setTodos, addTodo, updateTodo, deleteTodo } from '../actions';
import * as types from '../actions/types';

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

const baseUrl = process.env.BASE_URL;

const api = (store) => (next) => async (action) => {
  if (!action) return;

  if (action?.type === types.FETCH_GET) {
    const getResData = await handleAsync(fetch(baseUrl));
    store.dispatch(setTodos(getResData.data));
  }
  if (action?.type === types.FETCH_PUT) {
    const { insertId } = await handleAsync(
      fetch(baseUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify(action.payload),
      }),
    );
    store.dispatch(addTodo(insertId, action.payload));
  }
  if (action?.type === types.FETCH_PATCH) {
    const { id, data } = action.payload;
    handleAsync(
      fetch(`${baseUrl}${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify(data),
      }),
    );
    store.dispatch(updateTodo(id, data));
  }
  if (action?.type === types.FETCH_DELETE) {
    await handleAsync(
      fetch(`${baseUrl}${action.payload}`, {
        method: 'DELETE',
        headers,
      }),
    );
    store.dispatch(deleteTodo(action.payload));
  }

  next(action);
};

export default api;
