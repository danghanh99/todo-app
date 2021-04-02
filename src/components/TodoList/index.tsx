import ITodo from "../../models/todo"
import { editDoneTodo, deleteTodo } from "../TodoForm/todoSlice";
import "../../index.css";
import axios from "axios";
import { useDispatch } from "react-redux";
const API_URL = "http://localhost:3001/api/";

interface IProps {
  todos: ITodo[];
}

function TodoList(props: IProps): JSX.Element {
  const { todos } = props;
  const dispatch = useDispatch();

  function handleClick(todo: ITodo) {
    const paramsId = todo.id;
    axios
      .delete(API_URL + "todos/" + paramsId)
      .then(() => {
        dispatch(deleteTodo(todo));
      })
      .catch((error) => {
        throw error;
      });
  }

  function handleCheck(todo: ITodo) {
    axios
      .patch(API_URL + "todos/" + todo.id, {
        title: todo.title,
        done: !todo.done,
      })
      .then((response) => {
        const action = response.data;
        dispatch(editDoneTodo(action));
      })
      .catch((error) => {
        throw error;
      });
  }

  return (
    <ul className="d-flex flex-column-reverse todo-list">
      {todos.map((todo: ITodo) => (
        <div key={todo.id}>
          <li className={todo.done ? "completed" : ""}>
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
