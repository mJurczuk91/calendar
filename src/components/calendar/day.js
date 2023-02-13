import React from 'react';
import classes from './day.module.css'
import { Task } from '../task/task';

export const Day = (props) => {
    console.log('day');
    return <>
        <div className={classes.day}>
            <Task />
        </div>
    </>

}