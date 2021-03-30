import React from "react";
import PropTypes from "prop-types";
import "../../index.css";
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
  function handleClick(todo: any) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  function handleCheck(todo: any) {
    onCheckBoxClick(todo);
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
