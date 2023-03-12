import useDatepicker from '../hooks/useDatepicker';
import { getMonthNameInPolish } from '../utils/datepicker-utils';
import classes from './navbar.module.scss';

const DatepickerNavbar: React.FC = () => {
    const {dates, setPreviousMonth, setNextMonth} = useDatepicker();
    return (
        <div>
            <p>
                {getMonthNameInPolish(dates.viewMonth)}
            </p>
            <p>
                {dates.viewYear}
            </p>
            <div>
                <button onClick={() => { setPreviousMonth(); }}>{`<`}</button>
                <button onClick={() => { setNextMonth(); }}>{`>`}</button>
            </div>
        </div>
    )
};

export default DatepickerNavbar;