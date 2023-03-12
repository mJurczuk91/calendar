import useDatepicker from '../hooks/useDatepicker';
import useSetDatepicker from '../hooks/useSetDatepicker';
import { getMonthNameInPolish } from '../utils/datepicker-utils';

const DatepickerNavbar: React.FC = () => {
    const { viewPreviousMonth, viewNextMonth } = useSetDatepicker();
    const {viewMonth, viewYear} = useDatepicker();
    return (
        <div>
            <p>
                {getMonthNameInPolish(viewMonth)}
            </p>
            <p>
                {viewYear}
            </p>
            <div>
                <button onClick={() => { viewPreviousMonth(); }}>{`<`}</button>
                <button onClick={() => { viewNextMonth(); }}>{`>`}</button>
            </div>
        </div>
    )
};

export default DatepickerNavbar;