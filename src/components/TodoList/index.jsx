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
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <div className="add-items d-flex">
                  {" "}
                  <input
                    type="text"
                    className="form-control todo-list-input"
                    placeholder="What do you need to do today?"
                  />{" "}
                  <button className="add btn btn-primary font-weight-bold todo-list-add-btn">
                    Add
                  </button>{" "}
                </div>
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    {todos.map((todo) => (
                      <li key={todo.id}>
                        <div className="form-check">
                          {" "}
                          <label className="form-check-label">
                            {" "}
                            <input className="checkbox" type="checkbox" />{" "}
                            {todo.title} <i className="input-helper" />
                          </label>{" "}
                        </div>{" "}
                        <i
                          className="remove mdi mdi-close-circle-outline"
                          onClick={() => handleClick(todo)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
