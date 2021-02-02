import { handleActions } from 'redux-actions';
import * as types from '../actions/types';

export const initalState = {
  todos: [],
};

const todosReducer = handleActions(
  {
    // SET_TODOS
    [types.SET_TODOS]: (state, action) => ({
      todos: [...state.todos, ...action.payload],
    }),
    // ADD_TODO
    [types.ADD_TODO]: (state, action) => ({
      todos: [...state.todos, action.payload],
    }),
    // UPDATE_TODO
    [types.UPDATE_TODO]: (state, action) => ({
      todos: state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload.data }
          : todo,
      ),
    }),
    // DELETE_TODO
    [types.DELETE_TODO]: (state, action) => ({
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
  },
  initalState,
);

export default todosReducer;
