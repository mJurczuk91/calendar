import { useAppSelector } from "../../../store/redux-hooks";
import { selectPickedDate } from "../store/datepicker.slice";

const useDatepicker = () => {
    const {pickedDay, pickedMonth, pickedYear, viewMonth, viewYear} = useAppSelector(selectPickedDate);
    return {pickedDay, pickedMonth, pickedYear, viewMonth, viewYear};
}

export default useDatepicker;