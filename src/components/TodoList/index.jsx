import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <ul className="d-flex flex-column-reverse todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="form-check">
            {" "}
            <label className="form-check-label">
              {" "}
              <input className="checkbox" type="checkbox" /> {todo.title}{" "}
              <i className="input-helper" />
            </label>{" "}
          </div>{" "}
          <i
            className="remove mdi mdi-close-circle-outline"
            onClick={() => handleClick(todo)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
