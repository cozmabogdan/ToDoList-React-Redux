import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/editList/editList';


export const store = configureStore({
  reducer: {
    edit: todoReducer, 
  },
});
