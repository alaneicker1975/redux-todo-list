import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, FormField } from '@atomikui/core';

const AddTodoForm = ({ onSubmit }) => {
  const inputRef = useRef();

  const handleSubmit = () => {
    onSubmit(inputRef.current.value);
    inputRef.current.value = '';
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) handleSubmit();
  };

  return (
    <div className="flex flex--hr-16 padding-16">
      <FormField
        ref={inputRef}
        className="flex__item--grow todo-list__add-input"
        aria-label="add todo"
        placeholder="Add Todo"
        onKeyUp={handleKeyUp}
      />
      <Button theme="blue" onClick={handleSubmit}>
        add
      </Button>
    </div>
  );
};

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodoForm;
