// src/features/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  tasks: JSON.parse(Cookies.get('tasks') || '[]'),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      Cookies.set('tasks', JSON.stringify(state.tasks), { expires: 30 });
    },
    editTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      state.tasks[index] = updatedTask;
      Cookies.set('tasks', JSON.stringify(state.tasks), { expires: 30 });
    },
    loadTasks: (state) => {
      const savedTasks = Cookies.get('tasks');
      if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
      }
    },
  },
});

export const { addTask, editTask, loadTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
