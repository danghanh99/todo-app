import React from "react";
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
const API_URL = "http://localhost:3001/api/";

interface IFormInput {
  value: string;
}

function TodoForm(): JSX.Element {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { register, handleSubmit, errors } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    const formValues = {
      title: data.value,
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
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} className="add-items d-flex">
        <input
          value={value}
          onChange={handleValueChange}
          placeholder="What do you need to do today?"
          className="form-control todo-list-input"
          name="value"
          ref={register({
            required: true,
          })}
        />
        <button
          type="submit"
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
        >
          Add
        </button>
      </form>
      {errors.value && (
        <div
          className="alert alert-danger"
          role="alert"
          style={{
            textAlign: "left",
          }}
        >
          <strong>{errors.value && "Input form is required"}</strong>
        </div>
      )}
    </React.Fragment>
  );
}

export default TodoForm;
