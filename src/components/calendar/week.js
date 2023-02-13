import React from 'react';
import { Day } from './day';

const buildWeek = (currentDate) => {
    console.log(currentDate.getDate(), currentDate.getDay());
    const week = [];

    let sunday = new Date();
    sunday.setDate(currentDate.getDate() - currentDate.getDay());
    console.log(sunday);

    for(let i = 1; i < 7; i++){
        let date = new Date();
        date.setDate(sunday + 1);
        week.push(<Day date={date}/>)
    }
    week.push(<Day date={sunday}/>);
    return week;
}

export const Week = ({currentDate}) => {
    const week = buildWeek(currentDate)

    return <div style={{display: 'flex'}}>
        {
            week
        }
    </div>
}