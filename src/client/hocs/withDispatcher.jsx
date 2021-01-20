/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodos,
  fetchTodo,
  putTodo,
  patchTodo,
  deleteTodo,
} from '../actions/todos';

const withDispatcher = (Component, todoId) => (originalProps) => {
  const dispatch = useDispatch();
  const {
    todosReducer: { todos },
  } = useSelector((state) => state);

  const onAdd = (todo) => {
    dispatch(putTodo(todo));
  };

  const onUpdate = (todo, id) => {
    dispatch(patchTodo(todo, id));
  };

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const props = {
    ...originalProps,
    todos,
    onAdd,
    onUpdate,
    onDelete,
  };

  useEffect(() => {
    if (todoId) {
      dispatch(fetchTodo(todoId));
    } else {
      dispatch(fetchTodos());
    }
  }, [dispatch]);

  return <Component {...props} />;
};

export default withDispatcher;
