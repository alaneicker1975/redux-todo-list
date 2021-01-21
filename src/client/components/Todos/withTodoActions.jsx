/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../../actions/todos';

const withTodoActions = (Component, todoId) => (originalProps) => {
  const dispatch = useDispatch();
  const {
    todosReducer: { todos },
  } = useSelector((state) => state);

  const onAdd = (todo) => {
    dispatch(addTodo({ ...todo, isComplete: false }));
  };

  const onUpdate = (id, data) => {
    dispatch(updateTodo(id, data));
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
    dispatch(getTodos());
  }, [dispatch]);

  return <Component {...props} />;
};

export default withTodoActions;
