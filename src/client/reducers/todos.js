import {
  FETCH_TODOS,
  FETCH_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  UPDATE_TODO_STATUS,
} from '../constants/action-types';

const initalState = {
  todos: [],
  todo: {},
};

const todosReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TODOS:
      return { ...state, todos: payload };
    case FETCH_TODO:
      return {
        ...state,
        todo: state.todos.find((todo) => todo.id === payload.id),
      };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, ...payload.data } : todo,
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    default:
      return state;
  }
};

export default todosReducer;
