import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDone, changeDescription } from './taskSlice';

const Task = () => {
    const task = useSelector((state) => {return 'Task'});
    return <div>
        {task}
    </div>
}

export default Task;