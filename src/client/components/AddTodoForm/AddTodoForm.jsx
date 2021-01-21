import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, FormField } from '@atomikui/core';

const AddTodoForm = ({ onSubmit }) => {
  const inputRef = useRef();

  return (
    <div className="flex flex--hr-16 padding-16">
      <FormField
        ref={inputRef}
        className="flex__item--grow todo-list__add-input"
        aria-label="add todo"
        placeholder="Add Todo"
      />
      <Button theme="blue" onClick={() => onSubmit(inputRef.current.value)}>
        add
      </Button>
    </div>
  );
};

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodoForm;
