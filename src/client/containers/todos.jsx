import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../actions/todos';

const withTodos = (Component) => {
  const WithTodos = (props) => {
    const dispatch = useDispatch();
    const { todos } = useSelector((state) => state);

    useEffect(() => {
      dispatch(fetchTodos());
    }, [dispatch]);

    return <Component todos={todos} {...props} />;
  };

  WithTodos.displayName = 'WithTodos';
  return WithTodos;
};

export default withTodos;
