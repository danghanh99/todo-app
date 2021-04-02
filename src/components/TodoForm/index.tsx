import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
const API_URL = "http://localhost:3001/api/";

function TodoForm(): JSX.Element {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value === "") {
      return;
    }

    const formValues = {
      title: value,
    };

    axios
      .post(API_URL + "todos", {
        title: formValues.title,
        done: false,
      })
      .then((response) => {
        const action = response.data;

        dispatch(addTodo(action));
      })
      .catch((error) => {
        throw error;
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
