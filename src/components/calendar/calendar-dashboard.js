import React from 'react';
import Month from './month';
import Week from './week';
import Sidebar from '../layout/sidebar';

const CalendarDashboard = () => {
    let currentDate = new Date(Date.now());

    return <>
        <Sidebar />
        <Week currentDate={currentDate}/>
    </>
}

export default CalendarDashboard;