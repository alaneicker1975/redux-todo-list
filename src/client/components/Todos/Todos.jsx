import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGet,
  fetchPut,
  fetchPatch,
  fetchDelete,
} from '../../actions/thunks';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faCheck,
  faExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { Button, FormField, Header } from '@atomikui/core';
import AddTodoForm from '../AddTodoForm';

const Todos = ({ headerText }) => {
  const dispatch = useDispatch();

  const {
    todosReducer: { todos },
  } = useSelector((state) => state);

  const onAdd = (todo) => {
    dispatch(fetchPut({ ...todo, isComplete: false }));
  };

  const onUpdate = (id, data) => {
    dispatch(fetchPatch({ id, data }));
  };

  const onDelete = (id) => {
    dispatch(fetchDelete(id));
  };

  useEffect(() => {
    dispatch(fetchGet());
  }, [dispatch]);

  return (
    <div className="todo-list">
      <Header
        backgroundColor="#1f2a30"
        logoText={<h1 style={{ marginLeft: '8px' }}>{headerText}</h1>}
        logoFontSize={36}
        logoFontColor="white"
        logoFont="'Barlow Condensed', Arial, Helvetica, sans-serif"
        linkColor="white"
        menuToggleColor="white"
      />
      <AddTodoForm onSubmit={(title) => onAdd({ title })} />
      {todos.length > 0 ? (
        <ul>
          {todos.map(({ id, title, isComplete }) => (
            <li key={id}>
              <Button
                className="todo-list__status-btn"
                size="sm"
                checked={isComplete}
                theme={isComplete ? 'lime' : 'red'}
                onClick={() => onUpdate(id, { isComplete: !isComplete })}
                aria-label={isComplete ? 'done' : 'pending'}
                title="click to update status"
              >
                <Icon icon={isComplete ? faCheck : faExclamation} />
              </Button>
              <FormField
                aria-label="todo title"
                className="todo-list__input"
                defaultValue={title}
                onBlur={(e) => onUpdate(id, { title: e.target.value })}
              />
              <Button
                className="todo-list__delete-btn"
                theme="hollow"
                size="sm"
                onClick={() => onDelete(id)}
                aria-label="delete"
              >
                <Icon icon={faTimes} size="2x" color="white" />
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="padding-16">No todos</div>
      )}
    </div>
  );
};

Todos.propTypes = {
  headerText: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      isCompleted: PropTypes.bool,
    }),
  ),
  onAdd: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

Todos.defaultProps = {
  headerText: 'Todo List',
  todos: [],
  onAdd: null,
  onDelete: null,
  onUpdate: null,
};

export default Todos;
