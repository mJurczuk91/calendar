import { padWithZeros } from "../../../date-utils/dateutils";
import classes from "./calendar-hourlist.module.scss";

const CalendarHourlist:React.FC = () => {
    const generateHours = () => {
        const hours = [];
        const date = new Date();
        date.setHours(0, 0, 0);
        let key = 0;
        while(date.getDate() === new Date().getDate()){
            hours.push(<div key={key}>
                {`${padWithZeros(date.getHours())}:${padWithZeros(date.getMinutes())}`}
            </div>);
            date.setMinutes(date.getMinutes()+15);
            key++;
        }
        return hours;
    }
    return <>
        {generateHours()}
    </>
}

export default CalendarHourlist;