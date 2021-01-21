/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGet,
  fetchPut,
  fetchPatch,
  fetchDelete,
} from '../../actions/todos';

const withTodoActions = (Component) => (originalProps) => {
  const dispatch = useDispatch();
  const {
    todosReducer: { todos },
  } = useSelector((state) => state);

  const onAdd = (todo) => {
    dispatch(fetchPut({ ...todo, isComplete: false }));
  };

  const onUpdate = (id, data) => {
    dispatch(fetchPatch(id, data));
  };

  const onDelete = (id) => {
    dispatch(fetchDelete(id));
  };

  const props = {
    ...originalProps,
    todos,
    onAdd,
    onUpdate,
    onDelete,
  };

  useEffect(() => {
    dispatch(fetchGet());
  }, [dispatch]);

  return <Component {...props} />;
};

export default withTodoActions;
