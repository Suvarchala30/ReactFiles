import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

  let time=new Date().toLocaleTimeString()
  const [ctime,setCtime]=useState(time)
  useEffect(()=>{
    setInterval(updateTime,1000)
  })
  const updateTime=()=>{
    time=new Date().toLocaleTimeString()
    setCtime(time)
  }
  return (
    <div className="App">
      {ctime}
    </div>
  );
}

export default App;
