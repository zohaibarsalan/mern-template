import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Reducers/counterReducer.jsx';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
