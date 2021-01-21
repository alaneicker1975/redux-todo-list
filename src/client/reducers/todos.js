import { handleActions } from 'redux-actions';
import { actions } from '../actions';

const initalState = {
  todos: [],
  message: null,
};

const todosReducer = handleActions(
  {
    // SET_TODOS
    [actions.setTodos.toString()]: (state, action) => ({
      todos: action.payload,
    }),
    // ADD_TODO
    [actions.addTodo.toString()]: (state, action) => ({
      todos: [...state.todos, action.payload],
    }),
    // UPDATE_TODO
    [actions.updateTodo.toString()]: (state, action) => ({
      todos: state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload.data }
          : todo,
      ),
    }),
    // DELETE_TODO
    [actions.deleteTodo.toString()]: (state, action) => ({
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
  },
  initalState,
);

export default todosReducer;
