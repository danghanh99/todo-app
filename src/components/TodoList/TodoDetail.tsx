import TodoService from '../../services/TodoService';
import ITodo from '../../models/Todo';
import { editDoneTodo, deleteTodo } from '../TodoApp/TodoSlice';
import '../../index.css';
import { useDispatch } from 'react-redux';
interface IProps {
  todo: ITodo;
}

const TodoDetail = (props: IProps) => {
  const { todo } = props;
  const dispatch = useDispatch();

  const handleClick = (todoId: number) => {
    TodoService.deleteTodo(todoId)
      .then(() => {
        dispatch(deleteTodo(todoId));
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleCheck = (doneTodoId: number) => {
    TodoService.doneTodo(doneTodoId)
      .then((response) => {
        dispatch(editDoneTodo(response));
      })
      .catch((error) => {
        throw error;
      });
  };

  return (
    <div key={todo.id}>
      <li className={todo.cssClassDoned()}>
        <div className="form-check">
          {' '}
          <label className="form-check-label">
            {' '}
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.done}
              onChange={() => handleCheck(todo.id)}
            />{' '}
            {todo.title} <i className="input-helper" />
          </label>{' '}
        </div>{' '}
        <i
          className="remove mdi mdi-close-circle-outline"
          onClick={() => handleClick(todo.id)}
        />
      </li>
    </div>
  );
};
export default TodoDetail;
