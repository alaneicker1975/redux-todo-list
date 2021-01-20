/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
  updateTodoStatus,
} from '../actions/todos';

const withDispatcher = (Component, todoId) => (originalProps) => {
  const dispatch = useDispatch();
  const {
    todosReducer: { todos },
  } = useSelector((state) => state);

  const onAdd = (todo) => {
    dispatch(updateTodo(todo));
  };

  const onUpdate = (title, id) => {
    dispatch(updateTodo(id, { title }));
  };

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const onUpdateStatus = (status, id) => {
    const isComplete = status ? 0 : 1;
    dispatch(updateTodoStatus(id, { isComplete }));
  };

  const props = {
    ...originalProps,
    todos,
    onAdd,
    onUpdate,
    onDelete,
    onUpdateStatus,
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
