import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ITodo from '../../models/Todo';

const todo = createSlice({
  name: 'todos',
  initialState: [] as ITodo[],
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.push(action.payload);
    },
    getTodos: (state, action: PayloadAction<ITodo[]>) => {
      return (state = action.payload);
    },
    editDoneTodo: (state: ITodo[], action: PayloadAction<ITodo>) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      const editTodo = state[index];
      editTodo.done = action.payload.done;
      editTodo.title = action.payload.title;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      return state.filter((item: ITodo) => item.id !== action.payload);
    },
  },
});

const { reducer, actions } = todo;
export const { addTodo, getTodos, editDoneTodo, deleteTodo } = actions;
export default reducer;
