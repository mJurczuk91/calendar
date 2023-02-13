import React from 'react';
import { Month } from './month';
import { Week } from './week';

export const CalendarDashboard = () => {
    let currentDate = new Date(Date.now());

    return <>
        <Week currentDate={currentDate}/>
    </>
}