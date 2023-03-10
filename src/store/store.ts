import { configureStore } from '@reduxjs/toolkit';
import datepickerSlice from '../features/datepicker/store/datepicker.slice';

const store = configureStore({
    reducer: {
        datepickerSlice,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;