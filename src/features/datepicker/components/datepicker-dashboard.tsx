import useDatepicker from "../hooks/useDatepicker";
import useSetDatepicker from "../hooks/useSetDatepicker";
import classes from "./datepicker-dashboard.module.scss";

const DatepickerDashboard:React.FC = () => {
    const {setPickedDay} = useSetDatepicker();
    const dates = useDatepicker();

    const buildWeeks = () => {
        const calendar = [];
        //brzydkie modyfikacje na obiekcie date, ale taki urok wbudowanych w js dat
        //cofam po jednym dniu aż dojdzie do dnia tygodnia nr 1, czyli w date js poniedziałek (0 to niedziela)
        const firstWeekStart = new Date(dates.viewYear, dates.viewMonth, 1);
        while(firstWeekStart.getDay() > 1){
            firstWeekStart.setDate(firstWeekStart.getDate() - 1);
        }

        const dayClickHandler = (date:Date) => {
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            return () => {
                setPickedDay({day, month, year});
            }
        }

        // wyświetla zawsze 6 tygodni, to nigdy nie trzeba zmieniać wielkości kalendarza (ilości rzędów), inaczej czasem by miał 5 czasem 6 tygodni
        const incrementingDay = new Date(firstWeekStart);
        console.log(incrementingDay.getFullYear(), incrementingDay.getMonth(), incrementingDay.getDate());
        for(let i = 0; i < 6; i++){
            let week = [];
            let weekDay = 0;
            while(weekDay <= 6){
                let currentDay = new Date(incrementingDay);
                week.push(
                    <div
                        key={incrementingDay.getTime()}
                        className={classes.day}
                        onClick={dayClickHandler(currentDay)}
                    >
                        {incrementingDay.getDate()}
                    </div>
                );
                weekDay++;
                incrementingDay.setDate(incrementingDay.getDate() + 1);
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