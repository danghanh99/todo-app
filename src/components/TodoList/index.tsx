import { editDoneTodo, deleteTodo } from "../TodoForm/todoSlice";
import React from "react";
import PropTypes from "prop-types";
import "../../index.css";
import axios from "axios";
import { useDispatch } from "react-redux";
const API_URL = "http://localhost:3001/api/";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
  onCheckBoxClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props: any) {
  const { todos, onTodoClick, onCheckBoxClick } = props;
  const dispatch = useDispatch();

  function handleClick(todo: any) {
    const params_id = todo.id;
    axios
      .delete(API_URL + "todos/" + params_id)
      .then(function () {
        dispatch(deleteTodo(params_id));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleCheck(todo: any) {
    axios
      .patch(API_URL + "todos/" + todo.id, {
        title: todo.title,
        done: !todo.done,
      })
      .then(function (response) {
        let action = response.data;
        dispatch(editDoneTodo(action));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <ul className="d-flex flex-column-reverse todo-list">
      {todos.map((todo: any) => (
        <div>
          <li key={todo.id} className={todo.done ? "completed" : ""}>
            <div className="form-check">
              {" "}
              <label className="form-check-label">
                {" "}
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleCheck(todo)}
                />{" "}
                {todo.title} <i className="input-helper" />
              </label>{" "}
            </div>{" "}
            <i
              className="remove mdi mdi-close-circle-outline"
              onClick={() => handleClick(todo)}
            />
          </li>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;
