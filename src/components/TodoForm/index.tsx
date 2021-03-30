import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../index.css";
TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props: any) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e: any) {
    setValue(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!onSubmit || value === '') return;

    const formValues = {
      title: value,
    };

    onSubmit(formValues);
    setValue("");
  }

  return (
      <form onSubmit={handleSubmit} className="add-items d-flex">
        <input
          value={value}
          onChange={handleValueChange}
          type="text"
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
        />
        <button
          type="submit"
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
        >
          Add
        </button>
      </form>
  );
}

export default TodoForm;
