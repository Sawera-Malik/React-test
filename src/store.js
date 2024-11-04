// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './Reducer/sliceauth';


const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    
  },
});

export default store;
