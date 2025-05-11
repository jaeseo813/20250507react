// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//App.js

//App.js

//App.js

// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import TimerDisplay from "./TimerDisplay";
import TimerButton from "./TimerButton";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // 자동 증가 타이머
  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1); // 1초마다 시간 증가
      }, 1000);
    } else {
      clearInterval(interval); // 멈췄을 때 타이머 제거
    }

    // cleanup: 컴포넌트가 unmount되거나 다시 실행될 때 정리
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 20) {
      setIsRunning(false);
      alert("20초가 지났습니다!");
    }
  }, [seconds]);

  const handleStart = () => {
    setIsRunning(true);
    console.log("타이머 시작");
  };

  const handleStop = () => {
    setIsRunning(false);
    console.log("타이머 멈춤");
  };
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    console.log("타이머 리셋");
  };

  return (
    <div className="container">
      <TimerDisplay seconds={seconds} />
      <TimerButton
        onStart={handleStart}
        onStop={handleStop}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
