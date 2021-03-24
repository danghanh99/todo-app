import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!onSubmit || value == '') return;

    const formValues = {
      title: value,
    };

    onSubmit(formValues);
    setValue("");
  }

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="text" value={value} onChange={handleValueChange}/>
    // </form>
    // <div className="add-items d-flex">
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
    // </div>
  );
}

export default TodoForm;
