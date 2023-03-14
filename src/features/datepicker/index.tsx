import DatepickerDashboard from "./components/datepicker-dashboard";
import DatepickerNavbar from "./components/datepicker-navbar";
import useDatepicker from "./hooks/useDatepicker";

const Datepicker: React.FC = () => {
    return <div>
        <DatepickerNavbar />
        <DatepickerDashboard />
    </div>
}

export default Datepicker;
export {useDatepicker};