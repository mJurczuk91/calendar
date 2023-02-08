import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        description: 'description',
        done: false,
    },
    reducers: {
        toggleDone: state => {
            state.done = !state.done;
        },
        changeDescription: (state, action) => {
            state.description = action.payload;
        }
    }
})