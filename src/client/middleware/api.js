import {
  FETCH_GET,
  FETCH_PUT,
  FETCH_PATCH,
  FETCH_DELETE,
} from '../constants/action-types';

import {
  setMessage,
  setTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from '../actions/todos';

const fetchContentType = 'application/json; charset=UTF-8';
const baseUrl = process.env.BASE_URL;

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type.match(/(FETCH_GET|FETCH_PUT|FETCH_PATCH|FETCH_DELETE)/)) {
    switch (action.type) {
      case FETCH_GET:
        try {
          const res = await fetch(baseUrl);
          const { err, data } = await res.json();

          if (err) throw new Error(err);

          dispatch(setTodos(data));
        } catch (err) {
          dispatch(setMessage(err.message));
        }
        break;
      case FETCH_PUT:
        try {
          const data = action.payload;
          const res = await fetch(baseUrl, {
            method: 'PUT',
            headers: {
              'Content-type': fetchContentType,
            },
            body: JSON.stringify(data),
          });

          const { insertId, err } = await res.json();

          if (err) throw new Error(err);

          dispatch(addTodo(insertId, data));
        } catch (err) {
          dispatch(setMessage(err.message));
        }
        break;
      case FETCH_PATCH:
        try {
          const { id, data } = action.payload;
          const res = await fetch(`${baseUrl}${id}`, {
            method: 'PATCH',
            headers: {
              'Content-type': fetchContentType,
            },
            body: JSON.stringify(data),
          });

          const { err } = await res.json();

          if (err) throw new Error(err);

          dispatch(updateTodo(id, data));
        } catch (err) {
          dispatch(setMessage(err.message));
        }
        break;
      case FETCH_DELETE:
        try {
          const id = action.payload;
          const res = await fetch(`${baseUrl}${id}`, {
            method: 'DELETE',
            headers: {
              'Content-type': fetchContentType,
            },
          });

          const { err } = await res.json();

          if (err) throw new Error(err);

          dispatch(deleteTodo(id));
        } catch (err) {
          dispatch(setMessage(err.message));
        }
        break;
      default:
    }
  } else {
    next(action);
  }
};

export default api;
