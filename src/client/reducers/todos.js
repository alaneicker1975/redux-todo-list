import { handleActions } from 'redux-actions';
import { todoActions } from '../actions';

const initalState = {
  todos: [],
  message: null,
};

const todosReducer = handleActions(
  {
    // SET_TODOS
    [todoActions.setTodos.toString()]: (state, action) => ({
      todos: action.payload,
    }),
    // ADD_TODO
    [todoActions.addTodo.toString()]: (state, action) => ({
      todos: [...state.todos, action.payload],
    }),
    // UPDATE_TODO
    [todoActions.updateTodo.toString()]: (state, action) => ({
      todos: state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload.data }
          : todo,
      ),
    }),
    // DELETE_TODO
    [todoActions.deleteTodo.toString()]: (state, action) => ({
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    }),
  },
  initalState,
);

export default todosReducer;
