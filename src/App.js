import './App.css';
import Snowfall from 'react-snowfall'
import React, { useEffect, useState } from 'react';

function App() {
  const [audio, setAudio] = useState("");
  const [isPlay, setPlay] = useState(false);
  const [className, setClassName] = useState('disk paused');

  const Play = () => {
    setClassName('disk');
    setPlay(true);
    audio.play();
  };

  const Stop = () => {
    setClassName('disk paused');
    setPlay(false);
    audio.pause();
  };

  useEffect(() => {
    setAudio(new Audio("Home Alone - Somewhere In My Memory.mp3"));
  }, []);

  return (
    <div className="App">
      {isPlay && <Snowfall />}
      <div className={className} onClick={isPlay ? Stop : Play}></div>
      <div className="name-container">
        <div className="name">Один дома</div>
      </div>
    </div>
  );
}

export default App;
