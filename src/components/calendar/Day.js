import React from 'react';
import classes from './Day.module.css'
import { Task } from '../task/task';

const listHours = (currentDate, stepMinutes, hourFrom, hourTo) => {
    
}

export const Day = (props) => {
    console.log('day');
    return <>
        <div className={classes.day}>
            <Task />
        </div>
    </>

}