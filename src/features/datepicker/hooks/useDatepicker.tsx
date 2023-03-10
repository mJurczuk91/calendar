import { useAppSelector } from "../../../store/redux-hooks";
import { selectPickedDate } from "../store/datepicker.slice";

const useDatepicker = () => {
    const dates = useAppSelector(selectPickedDate);
    return dates;
}

export default useDatepicker;