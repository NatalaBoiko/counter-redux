import { createSlice } from '@reduxjs/toolkit';
export const mySlice = createSlice({
  name: 'myValue',
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

console.log(mySlice.actions);

export const { increment, decrement } = mySlice.actions;
