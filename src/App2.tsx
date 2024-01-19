import React, { useState } from 'react';
import logo from './logo.svg';
import './App2.css';

function App2() {
  const [msg, setMsg] = useState("App2です。");
  const onClick = ()=>{
    setMsg(m=>m + "クリックされました。");
  };
  return (
    <div className="App2">
      <header className="App2-header">
        <p onClick={onClick}>{msg}</p>
      </header>
    </div>
  );
}

export default App2;
