import ITodo from '../../models/Todo';
import { useEffect } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from './TodoSlice';
import TodoService from '../../services/TodoService';
export interface IState {
  todos: ITodo[];
}

const App = () => {
  const todoList = useSelector((state: IState) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    TodoService.getTodoList()
      .then((res) => {
        dispatch(getTodos(res));
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <div>
      <div className="app">
        <div className="page-content page-container" id="page-content">
          <div
            className="padding"
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div className="row container d-flex justify-content-center">
              <div className="col-md-12">
                <div className="card px-3">
                  <div className="card-body">
                    <h4 className="card-title" style={{ textAlign: 'left' }}>
                      Awesome Todo list
                    </h4>
                    <TodoForm />
                    <div className="list-wrapper">
                      <TodoList todos={todoList} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
