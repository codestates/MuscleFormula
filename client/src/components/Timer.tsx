import { current } from '@reduxjs/toolkit';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

export const TimerContainer = styled.div`
  > #display {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    > .start, .stop {
      margin: 0.5rem;
      width: 80px;
      font-size: large;
      font-family: "IBM Plex Sans KR", sans-serif;
      font-size: large;
      background-color: #00cc99;
      color:black;
      border: none;
      border-radius: 20px;
      box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    > .stop {
      background-color: black;
      color:white;
    }
    > .time {
      margin: 0.5rem;
      font-family: "IBM Plex Sans KR", sans-serif;
      font-size: xx-large;
    }
    > .false {
      color: black;
    }
    > .true {
      color: #00cc99
    }
    > .delete-button{
      font-size: x-large;
      cursor: pointer;
    }
    > .delete-button:hover{
      color: #FF6969
    }
  }
  > #nodisplay {
    display: none;
  }
  
`

interface RecordType {
  genre: string,
  weight: number,
  count: number,
}

interface TimerProps{
  setTotalSec: React.Dispatch<React.SetStateAction<number>>;
}

const Timer:React.FC<TimerProps> = ({ setTotalSec}) => {
  const [isDelete, setIsDelete] = useState(false);
  const [start, setStart] = useState(false);
  const [sec, setSec] = useState(0);

  const recordStart = () => {
    setStart(!start);
  }

  const handleDelete = () => {
    setStart(false);
    setTotalSec((cur)=> cur - sec);
    setIsDelete(true);
  }

  useEffect(()=> {
    let interval :any = null;
    if(start) {
      interval = setInterval(()=> {
        setSec((cur) => cur + 1);
        setTotalSec((cur) => cur + 1);
      }, 1000);
    } else if (!start && sec !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[start, sec, setTotalSec]);

  function secToTime(duration:number) {
    let seconds :(number|string) = Math.floor(duration % 60); 
    let minutes :(number|string) = Math.floor((duration / 60) % 60); 
    let hours :(number|string) = Math.floor((duration / (60 * 60)) % 24); 
    hours = (hours < 10) ? "0" + hours : hours; 
    minutes = (minutes < 10) ? "0" + minutes : minutes; 
    seconds = (seconds < 10) ? "0" + seconds : seconds; 
    return hours + ":" + minutes + ":" + seconds; 
  }
  return (
    <TimerContainer>
    <div id={isDelete? "nodisplay" : "display"}>
      <button className={start? "stop":"start"} onClick={recordStart}>
        {start? '멈춤':'시작'}
      </button>
      <div className={`time ${start}`}>
        {secToTime(sec)}
      </div>
      <div className='delete-button' onClick={handleDelete}>
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
    </TimerContainer>
  )
}

export default Timer;