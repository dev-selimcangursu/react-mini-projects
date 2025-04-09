import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.value.findIndex(todo => todo.index === action.payload.index);
      if (index !== -1) {
        state.value[index] = action.payload;
      }
    }
  },
})

export const { addTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
