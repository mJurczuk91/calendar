import { useAppSelector } from "../../../store/redux-hooks";
import { selectPickedDate } from "../store/datepicker.slice";
import {nextViewMonth, previousViewMonth, setPickedDate} from "../store/datepicker.slice";
import { useAppDispatch } from "../../../store/redux-hooks";
import { getLastDayOfMonth } from "../utils/datepicker-utils";

const useDatepicker = () => {
    const dispatch = useAppDispatch();
    const dates = useAppSelector(selectPickedDate);
    const setNextMonth = () => { dispatch(nextViewMonth); }
    const setPreviousMonth = () => { dispatch(previousViewMonth); }
    const setDay = (day:number) => {
        if(day > 0 && day <= getLastDayOfMonth(dates.viewMonth, dates.viewYear)){
            dispatch(setPickedDate(day));
        };
    }
    return {dates, setNextMonth, setPreviousMonth, setDay};
}

export default useDatepicker;