import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes, faListUl, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, FormField, Header } from '@atomikui/core';
import withTodoActions from './withTodoActions';

const Todos = ({ headerText, todos, onDelete, onAdd, onUpdate, ...others }) => (
  <div className="todo-list-wrapper">
    <Header
      backgroundColor="#1f2a30"
      logo={<Icon icon={faListUl} color="white" />}
      logoText={<span style={{ marginLeft: '8px' }}>{headerText}</span>}
      logoFontSize={40}
      logoFontColor="white"
      logoFont="'Barlow Condensed', Arial, Helvetica, sans-serif"
      linkColor="white"
      menuToggleColor="white"
    >
      <Button size="md" theme="blue">
        <Icon icon={faPlus} color="white" /> Add Todo
      </Button>
    </Header>
    <ul className="todo-list" {...others}>
      {todos.map(({ id, title, isComplete }) => (
        <li key={id} className="todo-list__item">
          <Button
            className="todo-list__update-status-btn"
            size="sm"
            checked={isComplete}
            theme={isComplete ? 'lime' : 'red'}
            onClick={() => onUpdate(id, { isComplete: !isComplete })}
            aria-label={isComplete ? 'done' : 'pending'}
            title="click to update status"
          />
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
  </div>
);

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

export default withTodoActions(Todos);
