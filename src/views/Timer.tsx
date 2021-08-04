// the actual timer

import React, { FC, useState, useEffect } from 'react';
// import type { SessionType } from '../types';


export type SessionType = {
    sessions: number;
    studyTime: number;
    breakTime: number;
};

type Time = {
    minutes: number;
    seconds: number;
    sessionsRemaining: number;
}

interface TimerInterface {
    session: SessionType;
    finishedSessionHandler: (s: number) => void;
}


const Timer : FC<TimerInterface> = ({session, finishedSessionHandler}) => {
    const [time, setTime] = useState<Time>({minutes: session.studyTime, seconds: 1, sessionsRemaining: session.sessions*2});

    useEffect(() => {
        setTimeout(() => {
            let s = time.seconds;
            let m = time.minutes;
            let sess = time.sessionsRemaining;

            // end of a study block or break block
            if (s === 0 && m === 0){
                sess -= 1;
                if (sess % 2 === 1){
                    m = session.breakTime;
                } else {
                    m = session.studyTime;
                }
                s = 1
                // isStudy = !isStudy;
            }

            // end of 1 minute
            if (s === 0){
                m = m-1;
                s = 61;
            }
            s -= 1;

            // end of booked session
            if (sess === 0) {
                finishedSessionHandler(0);
            }

            setTime({minutes: m, seconds: s, sessionsRemaining: sess});
        }, 1000);
    });

    return <div style={{width: 300, fontSize: 18, backgroundColor: time.sessionsRemaining % 2 === 0 ? 'green' : 'red'}}>
        {time.minutes}:{time.seconds}
    </div>
}

export default Timer;