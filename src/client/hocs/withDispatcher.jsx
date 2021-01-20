/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, getTodo, updateTodo, deleteTodo } from '../actions/todos';

const withDispatcher = (Component, todoId) => (originalProps) => {
  const dispatch = useDispatch();
  const {
    todosReducer: { todos },
  } = useSelector((state) => state);

  const onAdd = (todo) => {
    dispatch(updateTodo(todo));
  };

  const onUpdate = (todo, id) => {
    dispatch(updateTodo(todo, id));
  };

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const onStatusUpdate = (id) => {};

  const props = {
    ...originalProps,
    todos,
    onAdd,
    onUpdate,
    onDelete,
  };

  useEffect(() => {
    if (todoId) {
      dispatch(getTodo(todoId));
    } else {
      dispatch(getTodos());
    }
  }, [dispatch]);

  return <Component {...props} />;
};

export default withDispatcher;
