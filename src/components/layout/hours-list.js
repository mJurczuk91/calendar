import classes from "./hours-list.module.css";

const padWithZeros = (hour) => {
    return hour.toString().length > 1 ? hour : `0${hour}`;
}

export const createHours = (startHour = 8, endHour = 22, stepMinutes = 15, date = null) => {
    const hours = [];
    for(let currentHour = startHour; currentHour < endHour; currentHour++){
        for(let minutes = 0; minutes < 60; minutes += stepMinutes){
            let dateTime = date === null ? null : date.getTime() + (currentHour * 60 + minutes) * 60000;
            hours.push({
                id: `${currentHour}${minutes}`,
                h: padWithZeros(currentHour),
                m: padWithZeros(minutes),
                date: dateTime,
            });
        };
    };
    return hours;
}

const HoursList = () => {
    let hours = createHours();
    console.log(hours);
    return <>
        {hours.map(time => {
            return <div className={classes.hour} key={time.id}>
                <p>{time.h}:{time.m}</p>
            </div>
        })}
    </>
}

export default HoursList;