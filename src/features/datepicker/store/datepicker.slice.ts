import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";

export interface IDateSlice {
    viewMonth: number,
    viewYear: number,
    pickedDay: number,
    pickedMonth: number,
    pickedYear: number,
};

let currentDate = new Date();
const initialState:IDateSlice = {
    viewMonth: currentDate.getMonth(),
    viewYear: currentDate.getFullYear(),
    pickedDay: currentDate.getDay(),
    pickedMonth: currentDate.getMonth(),
    pickedYear: currentDate.getFullYear(),
};

const DatepickerSlice = createSlice({
    name: "datepickerSlice",
    initialState,
    reducers: {
        nextViewMonth(state){
            if(state.viewMonth === 11){
                state.viewMonth = 0;
                state.viewYear++;
            } else {
                state.viewMonth++;
            }
            console.log(state.viewMonth)
        },
        previousViewMonth(state){
            if(state.viewMonth === 0){
                state.viewMonth = 11;
                state.viewYear--;
            } else {
                state.viewMonth--;
            }
        },
        setPickedDate(state, action:PayloadAction<number>){
            state.pickedDay = action.payload;
            state.pickedMonth = state.viewMonth;
            state.pickedYear = state.viewYear;
        },
    }
});

export const {nextViewMonth, previousViewMonth, setPickedDate} = DatepickerSlice.actions;
export const selectPickedDate = (state: RootState) => state.datepickerSlice;
export default DatepickerSlice.reducer;