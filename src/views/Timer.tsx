// the actual timer

import React, { FC, useState, useEffect } from 'react';
// import type { SessionType } from '../types';


export type SessionType = {
    sessions: number;
    studyTime: number;
    breakTime: number;
};

interface TimerInterface {
    session: SessionType;
    finishedSessionHandler: (s: number) => void;
}

const Timer : FC<TimerInterface> = ({session, finishedSessionHandler}) => {
    const [minutes, setMinutes] = useState(session.studyTime);
    const [seconds, setSeconds] = useState(0);
    const [numOfSessions, setNumOfSessions] = useState(session.sessions);
    const [isStudy, setIsStudy] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            let s : number = seconds;
            let m : number = minutes;
            let study: boolean = isStudy;
            let sess: number = numOfSessions;

            if (numOfSessions === 0) {
                finishedSessionHandler(0);
            }

            if (s === 0 && m === 0){
                if (isStudy){
                    m = session.breakTime;
                } else {
                    sess = numOfSessions-1;
                    m = session.studyTime;
                }
                s = 1
                study = !isStudy;
            }

            if (s === 0){
                m = minutes-1;
                s = 60;
            }
            s -= 1;

            setSeconds(s);
            setMinutes(m);
            setIsStudy(study);
            setNumOfSessions(sess);
        }, 1000);
    });

    return <div style={{width: 100}}>
        {minutes}:{seconds}
    </div>
}

export default Timer;