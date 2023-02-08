import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './components/task/taskSlice';

export const store = configureStore({
    reducer: {
        taskReducer,
    },
})