import TodoDetail from './TodoDetail';
import Todo from '../../models/Todo';

interface IProps {
  todos: Todo[];
}
const TodoList = (props: IProps) => {
  const { todos } = props;

  return (
    <ul className="d-flex flex-column-reverse todo-list">
      {todos.map((todo: Todo) => (
        <TodoDetail todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
