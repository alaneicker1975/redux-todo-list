import handleAsync from '../utilities/handleAsync';
import { actions, setTodos, addTodo, updateTodo, deleteTodo } from '../actions';

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

const baseUrl = process.env.BASE_URL;

const api = ({ dispatch }) => (next) => async (action = { type: '' }) => {
  switch (action.type) {
    // Get todos
    case actions.fetchGet.toString():
      const getResData = await handleAsync(fetch(baseUrl));
      dispatch(setTodos(getResData.data));
      break;
    // Adds a todo
    case actions.fetchPut.toString():
      const { insertId } = await handleAsync(
        fetch(baseUrl, {
          method: 'PUT',
          headers,
          body: JSON.stringify(action.payload),
        }),
      );
      dispatch(addTodo(insertId, action.payload));
      break;
    // Updates a todo
    case actions.fetchPatch.toString():
      const { id, data } = action.payload;
      handleAsync(
        fetch(`${baseUrl}${id}`, {
          method: 'PATCH',
          headers,
          body: JSON.stringify(data),
        }),
      );
      dispatch(updateTodo(id, data));
      break;
    // Deletes a todo
    case actions.fetchDelete.toString():
      await handleAsync(
        fetch(`${baseUrl}${action.payload}`, {
          method: 'DELETE',
          headers,
        }),
      );
      dispatch(deleteTodo(action.payload));
      break;
    // If action doesn;t match just return next action
    default:
      next(action);
  }
};

export default api;
