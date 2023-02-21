import React from 'react';
import classes from './day.module.css'
import Task from '../task/task';

const listHours = (currentDate, stepMinutes, hourFrom, hourTo) => {
    
}

const Day = (props) => {
    console.log('day');
    return <>
        <div className={classes.day}>
            <Task />
        </div>
    </>

}

export default Day;