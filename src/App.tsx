import React, {useState} from "react";
import { Button } from "./components/Button";
import SessionSettings from './views/SessionSettings';
import Timer from './views/Timer';
import "./App.css";

const App = () => {
  const [sessions, setSessions] = useState(0);

  return sessions === 0 ? <SessionSettings/> : <Timer duration={2} />;
};

export default App;
