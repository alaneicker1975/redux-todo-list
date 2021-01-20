import React from 'react';
import PropTypes from 'prop-types';
import withTodos from '../../containers/todos';

const TodoList = withTodos(({ todos }) => (
  <div>{JSON.stringify(todos, null, 2)}</div>
));

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      isCompleted: PropTypes.bool,
    }),
  ).isRequired,
};

export default TodoList;
