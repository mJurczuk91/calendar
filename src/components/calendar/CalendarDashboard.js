import React from 'react';
import { Month } from './Month';
import { Week } from './Week';
import { Sidebar } from '../layout/Sidebar';

export const CalendarDashboard = () => {
    let currentDate = new Date(Date.now());

    return <>
        <Sidebar />
        <Week currentDate={currentDate}/>
    </>
}