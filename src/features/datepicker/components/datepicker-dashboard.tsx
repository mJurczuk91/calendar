import useDatepicker from "../hooks/useDatepicker";

const DatepickerDashboard:React.FC = () => {
    const {dates, setNextMonth, setPreviousMonth, setDay} = useDatepicker();

    const buildWeeks = () => {
        const calendar = [];
        //brzydkie modyfikacje na obiekcie date, ale taki urok wbudowanych w js dat
        //cofam po jednym dniu aż dojdzie do dnia tygodnia nr 1, czyli w date js poniedziałek (0 to niedziela)
        const firstWeekStart = new Date(dates.viewYear, dates.viewMonth, 1);
        while(firstWeekStart.getDay() > 1){
            firstWeekStart.setDate(firstWeekStart.getDate() - 1);
        }

        // wyświetla zawsze 6 tygodni, to nigdy nie trzeba zmieniać wielkości kalendarza (ilości rzędów), inaczej czasem by miał 5 czasem 6 tygodni
        const currentDay = new Date(firstWeekStart);
        for(let i = 0; i < 6; i++){
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