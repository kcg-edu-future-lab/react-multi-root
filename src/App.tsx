import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState("App1です。");
  const onClick = ()=>{
    setMsg(m=>m + "クリックされました。");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p onClick={onClick}>{msg}</p>
      </header>
    </div>
  );
}

export default App;
