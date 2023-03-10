import useDatepicker from '../hooks/useDatepicker';
import { getMonthNameInPolish } from '../utils/datepicker-utils';
import classes from './navbar.module.scss';

const DatepickerNavbar: React.FC = () => {
    const dates = useDatepicker();
    return (
        <div>
            <p>
                {getMonthNameInPolish(dates.viewMonth)}
            </p>
        </div>
    )
};

export default DatepickerNavbar;