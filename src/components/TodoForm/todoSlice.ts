import { createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state: any, action: any) => {
      state.push(action.payload)
    },
    getTodos: (state: any, action: any) => {
      return state = action.payload;
    },
    editDoneTodo: (state: any, action: any) => {
      const todo = state[action.payload.id]
      todo.done = action.payload.done
      todo.title = action.payload.title
    },
    deleteTodo: (state: any, action: any) => {
      return state.filter((todo: any, i: any) => i !== action.payload)
    },
  }
});

const { reducer, actions } = todo;
export const { addTodo, getTodos, editDoneTodo, deleteTodo } = actions;
export default reducer;