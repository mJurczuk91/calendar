import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDone, changeDescription } from './taskSlice';

export const Task = () => {
    const task = useSelector((state) => {return state.task.description});
    return <div>
        {task}
    </div>
}