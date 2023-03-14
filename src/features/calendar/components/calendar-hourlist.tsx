import classes from "./calendar-hourlist.module.scss";
import { padWithZeros } from "../../../date-utils/dateutils";

const CalendarHourlist:React.FC<{children?: React.ReactNode, intervalTimestamps:Date[]}> = ({intervalTimestamps}) => {
    return <>
        {intervalTimestamps.map((date) => {
            return <div>
                <p>{`${padWithZeros(date.getHours())}:${padWithZeros(date.getMinutes())}`}</p>
            </div>
        })}
    </>
}

export default CalendarHourlist;