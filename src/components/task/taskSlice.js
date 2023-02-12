import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        id: 1,
        description: 'description',
        done: false,
        isBeingEdited: false,
    },
    reducers: {
        toggleDone: state => {
            state.done = !state.done;
        },
        toggleIsBeingEdited: state => {
            state.isBeingEdited = !state.isBeingEdited;
        },
        changeDescription: (state, action) => {
            state.description = action.payload;
        },
    }
});

export const {toggleDone, changeDescription} = taskSlice.actions;
export default taskSlice.reducer;