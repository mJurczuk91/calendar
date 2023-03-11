import useDatepicker from "../hooks/useDatepicker";
import { getLastDayOfMonth } from "../utils/datepicker-utils";

const DatepickerDashboard:React.FC = () => {
    const {dates, setNextMonth, setPreviousMonth, setDay} = useDatepicker();

    const buildWeeks = () => {
        const calendar = [];
        const monthStart = new Date(dates.viewYear, dates.viewMonth, 1);
        const firstWeekStart = new Date(monthStart);
        while(firstWeekStart.getDay() > 1){
            firstWeekStart.setDate(firstWeekStart.getDate() - 1);
        }
        const lastWeeksEnd = new Date(firstWeekStart);
        // wyświetla zawsze 6 tygodni, to nigdy nie trzeba zmieniać wielkości kalendarza (ilości rzędów), inaczej czasem by miał 5 czasem 6 tygodni
        lastWeeksEnd.setDate(lastWeeksEnd.getDate() + 41);
        console.log(firstWeekStart.toString(), lastWeeksEnd.toString());
        const currentDay = new Date(firstWeekStart);

        while(currentDay.getTime() <= lastWeeksEnd.getTime()){
            let week = [];
            let weekDay = 0;
            while(weekDay <= 6){
                week.push(
                    <div
                        key={currentDay.getTime()}
                        className={""}
                        onClick={
                            currentDay.getMonth() === dates.viewMonth ? () => { setDay(currentDay.getDate()); } :
                            currentDay.getMonth() < dates.viewMonth ? () => { setPreviousMonth(); setDay(currentDay.getDate()); } :
                            () => { setNextMonth(); setDay(currentDay.getDate()) }
                        }
                    >
                        {currentDay.getDate()}
                    </div>
                );
                weekDay++;
                currentDay.setDate(currentDay.getDate() + 1);
            }
            calendar.push(week);
        }
        return calendar;
    }
    
    return <>
        {buildWeeks()}
    </>
}

export default DatepickerDashboard;