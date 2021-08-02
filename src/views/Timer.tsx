// the actual timer

import React, { FC, useState, useEffect } from 'react';

interface TimerInterface {
    duration: number;
}

const Timer : FC<TimerInterface> = ({duration}) => {
    const [minutes, setMinutes] = useState(duration);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            let s : number = seconds;
            let m : number = minutes;
            if (s === 0){
                m = minutes-1;
                s = 60;
            }
            s = s-1;
            setSeconds(s);
            setMinutes(m);
        }, 1000);
    });

    return <div style={{width: 100}}>
        {minutes}:{seconds}
    </div>
}

export default Timer;