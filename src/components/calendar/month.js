import React from 'react';
import { Day } from './day';

export const Month = () => {
    let month = [];
    for(let i = 0; i< 30; i++){
        month.push(<Day key={i}/>)
    }

    return (
        <div>
            {month}
        </div>
    )
}