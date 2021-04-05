import axios from 'axios';
import ITodo from '../models/Todo';

const API_URL = 'http://localhost:3001/api/';

const getTodoList = (): Promise<ITodo[]> => {
  return axios.get(API_URL + 'todos').then((response) => response.data);
};

const addTodo = (title: string, done: boolean): Promise<ITodo> => {
  return axios
    .post(API_URL + 'todos', {
      title,
      done,
    })
    .then((response) => response.data);
};

const deleteTodo = (id: number): Promise<ITodo> => {
  return axios
    .delete(`${API_URL}todos/${id}`)
    .then((response) => response.data);
};

const doneTodo = (id: number): Promise<ITodo> => {
  return axios.patch(API_URL + 'todos/' + id).then((response) => response.data);
};

const TodoService = { getTodoList, addTodo, deleteTodo, doneTodo };
export default TodoService;
