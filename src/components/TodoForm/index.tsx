import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../index.css";
import { addTodo } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
const API_URL = "http://localhost:3001/api/";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props: any) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function handleValueChange(e: any) {
    setValue(e.target.value);
  }

  function handleTodoFormSubmit(formValues: any) {
    console.log("Form submit:", formValues);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (value === "") return;

    const formValues = {
      title: value,
    };

    axios
      .post(API_URL + "todos", {
        title: formValues.title,
        done: false,
      })
      .then(function (response) {
        let action = response.data;

        dispatch(addTodo(action));
      })
      .catch(function (error) {
        console.log(error);
      });

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
