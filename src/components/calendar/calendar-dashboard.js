import React from 'react';
import Sidebar from '../layout/sidebar';
import HoursList from '../layout/hours-list';
import Day from './day';

import classes from './calendar-dashboard.module.css'

const CalendarDashboard = () => {
    let currentDate = new Date(Date.now());

    return <>
        <div className={classes.calendar}>
        <Sidebar />
            <HoursList />
        </div>
        {/*         <Week currentDate={currentDate}/> */}
    </>
}

export default CalendarDashboard;