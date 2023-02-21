import React from 'react';
import Day from './day';

import classes from './week.module.css';

const buildWeek = (currentDate) => {
    const week = [];

    let sunday = new Date();
    sunday.setDate(currentDate.getDate() - currentDate.getDay());

    for(let i = 1; i < 7; i++){
        let date = new Date();
        date.setDate(sunday + 1);
        week.push(<Day key={i} date={date}/>)
    }
    week.push(<Day key={7} date={sunday}/>);
    
    return week;
}

const Week = ({currentDate}) => {
    const week = buildWeek(currentDate);

    return <div className={classes.week}>
        {week}
    </div>
}

export default Week;