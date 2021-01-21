import {
  todoActions,
  setMessage,
  setTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from '../actions/todos';

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

const baseUrl = process.env.BASE_URL;

const api = ({ dispatch }) => (next) => async (action) => {
  if (action.type.match(/(FETCH_GET|FETCH_PUT|FETCH_PATCH|FETCH_DELETE)/)) {
    switch (action.type) {
      case todoActions.fetchGet.toString():
        try {
          const res = await fetch(baseUrl);
          const { err, data } = await res.json();

          if (err) throw new Error(err);

          dispatch(setTodos(data));
        } catch (err) {
          dispatch(setMessage(err.message));
        }
        break;
      case todoActions.fetchPut.toString():
        try {
          const data = action.payload;

          const res = await fetch(baseUrl, {
            method: 'PUT',
            headers,
            body: JSON.stringify(data),
          });

          const { insertId, err } = await res.json();

          if (err) throw new Error(err);

          dispatch(addTodo(insertId, data));
        } catch (err) {
          dispatch(setMessage(err.message));
        }
        break;
      case todoActions.fetchPatch.toString():
        try {
          const { id, data } = action.payload;

          const res = await fetch(`${baseUrl}${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(data),
          });

          const { err } = await res.json();

          if (err) throw new Error(err);

          dispatch(updateTodo(id, data));
        } catch (err) {
          dispatch(setMessage(err.message));
        }
        break;
      case todoActions.fetchDelete.toString():
        try {
          const id = action.payload;

          const res = await fetch(`${baseUrl}${id}`, {
            method: 'DELETE',
            headers,
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
