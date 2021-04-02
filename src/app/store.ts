import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/TodoForm/todoSlice';

const rootReducer = {
  todos: todoReducer,
}

const store = configureStore({
  reducer: rootReducer,
});

export default store;