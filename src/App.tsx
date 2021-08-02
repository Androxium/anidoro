import React, {useState} from "react";
import SessionSettings from './views/SessionSettings';
// import type { SessionType } from "./types";
import Timer from './views/Timer';
import "./App.css";

export type SessionType = {
  sessions: number;
  studyTime: number;
  breakTime: number;
};

const App = () => {
  const [sessions, setSessions] = useState<SessionType>({sessions: 0, studyTime: 0, breakTime: 0});

  const _onStartHandler = (s: SessionType) => {
    console.log("in __onStartHandler", s);
    setSessions(s);
  }

  const _onSessionFinish = () => {
    setSessions({sessions: 0, studyTime: 0, breakTime: 0});
  }

  return sessions.sessions === 0 ? 
    <SessionSettings
      onStartHandler={_onStartHandler}
    /> :
    <Timer
      session={sessions}
      finishedSessionHandler={_onSessionFinish}
    />;
};

export default App;
