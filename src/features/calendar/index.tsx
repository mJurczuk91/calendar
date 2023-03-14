import { Provider } from "react-redux";
import store from "../../store/store";
import CalendarDashboard from "./components/calendar-dashboard";
import CalendarHourlist from "./components/calendar-hourlist";

const Calendar: React.FC = () => {
    return <div>
        <CalendarHourlist />
        <CalendarDashboard />
    </div>
}

export default Calendar;