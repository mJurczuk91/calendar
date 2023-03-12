import { useAppSelector } from "../../../store/redux-hooks";
import { selectPickedDate } from "../store/datepicker.slice";

const useSelectedDate = () => {
    const {pickedDay, pickedMonth, pickedYear} = useAppSelector(selectPickedDate);
    return {pickedDay, pickedMonth, pickedYear};
}

export default useSelectedDate();