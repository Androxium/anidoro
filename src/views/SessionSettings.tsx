// settings for when you start or pomodoro session
// will include the following
// 1. number of sessions
// 2. study time
// 3. rest time

import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const SessionSettings : FC = () => {
    const [sessions, setSessions] = useState(1);
    const [studyTime, setStudyTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);

    const onStartClick = () => {
        chrome.runtime.sendMessage({sessions, studyTime, breakTime});
    }

    return <div style={{width: 100, height: 100}}>
        <div style={{display: 'flex'}}>
            <Button variant='outlined' onClick={() => setSessions(sessions+1)}>+</Button>
            {sessions}
            <Button variant='outlined' onClick={() => setSessions(Math.max(sessions-1, 1))}>-</Button>
        </div>
        <div style={{display: 'flex'}}>
             <TextField type="number" defaultValue={studyTime} onBlur={(e) => setStudyTime(parseInt(e.target.value))}/>
        </div>
        <div style={{display: 'flex'}}>
             <TextField type="number" defaultValue={breakTime} onBlur={(e) => setBreakTime(parseInt(e.target.value))}/>
        </div>
        <div style={{display: 'flex'}}>
             <Button onClick={onStartClick}>Start</Button>
        </div>
    </div>
}

export default SessionSettings;