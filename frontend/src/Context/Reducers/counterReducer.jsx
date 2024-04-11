import { createSlice } from '@reduxjs/toolkit';
import { counterActions } from '../Actions/counterActions.jsx';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: counterActions,
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
