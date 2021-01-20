import {
  FETCH_TODOS,
  FETCH_TODO,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from '../constants/action-types';

export const setTodos = (payload) => ({ type: FETCH_TODOS, payload });

export const fetchTodos = () => (dispatch) => {
  fetch('http://localhost:4000/api/todos')
    .then((res) => res.json())
    .then((todos) => dispatch(setTodos(todos)));
};
