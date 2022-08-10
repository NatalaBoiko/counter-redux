import { configureStore } from '@reduxjs/toolkit';
import { mySlice } from './mySlice';

export const store = configureStore({
  reducer: {
    myValue: mySlice.reducer,
  },
});
// import { createSlice } from '@reduxjs/toolkit';

// const mySlice = createSlice({
//   name: 'myValue',
//   initialState: 0,
//   reducers: {
//     increment(state, action) {
//       return state + action.payload;
//     },
//     decrement(state, action) {
//       return state - action.payload;
//     },
//   },
// });

// console.log(mySlice.actions);

// export const { increment, decrement } = mySlice.actions;

// //==================================
// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { add, remove } = mySlice.actions;

// //==================================
// export const store = configureStore({
//   reducer: {
//     myValue: mySlice.reducer,
//     myItems: itemsSlice.reducer,
//   },
// });
// //==================================

// import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// console.log(increment.toString());

// const myReducer = createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });
// //==================================
// export const add = createAction('items/add');
// export const remove = createAction('items/remove');

// const itemsReducer = createReducer([], {
//   // [add]: (state, action) => [...state,  action.payload],
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });

// //==================================

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//     items: itemsReducer,
//   },
// });
