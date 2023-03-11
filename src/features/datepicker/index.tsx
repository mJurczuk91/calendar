import DatepickerDashboard from "./components/datepicker-dashboard";
import DatepickerNavbar from "./components/datepicker-navbar";

const Datepicker: React.FC = () => {
    return <>
        <DatepickerNavbar />
        <DatepickerDashboard />
    </>
}

export default Datepicker;