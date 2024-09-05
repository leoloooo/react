import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 1
  },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  }
});

// 导出动作创建函数
export const { increment, decrement } = counterSlice.actions;

// 导出 reducer
export default counterSlice.reducer;
