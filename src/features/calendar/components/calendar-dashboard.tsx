import { useDatepicker } from "../../datepicker";
import CalendarTopbar from "./calendar-topbar";
import CalendarHourlist from "./calendar-hourlist";
import { createIntervalTimestamps } from "../utils/calendar-utils";

const CalendarDashboard:React.FC = () => {
    const {pickedDay, pickedMonth, pickedYear} = useDatepicker();
    const intervalTimestamps = createIntervalTimestamps();
    return <>
        <CalendarTopbar pickedDay={pickedDay} pickedMonth={pickedMonth} pickedYear={pickedYear}/>
        <CalendarHourlist intervalTimestamps={intervalTimestamps}/>

    </>
}

export default CalendarDashboard;