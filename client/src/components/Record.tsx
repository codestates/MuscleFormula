import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

export const ExerciseContainer = styled.div`
  display:flex;
  flex-direction: row;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: large;
  padding-left: 1rem;
  > div {
    padding-right: 1rem;
  }
`

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  > .start, .stop {
    margin: 0.5rem;
    width: 70px;
    font-size: large;
    font-size: large;
    background-color: white;
    color:black;
    border: 2px solid black;
    border-radius: 15px;
    cursor: pointer;
  }
  > .stop {
    background-color: black;
    color:white;
  }
  > .time {
    margin: 0.5rem;
    font-family: "IBM Plex Sans KR", sans-serif;
    font-size: x-large;
  }
  > .false {
    color: black;
  }
  > .true {
    color: #00cc99
  }
  > .delete-button{
    font-size: large;
    cursor: pointer;
  }
  > .delete-button:hover{
    color: red;
  }
`
interface RecordType {
  genre: string,
  weight: number,
  count: number,
  time_record: number
}

interface RecordProps{
  exercise: RecordType;
  deleteRecord: (sec: number, deleteIndex: number) => void;
  idx: number;
  getRecordValue: (sec: number, idx: number) => void;
}

const Record:React.FC<RecordProps> = (
  { exercise, 
    deleteRecord, 
    idx,
    getRecordValue
  }) => {
  
  const [sec, setSec] = useState(0);
  const [start, setStart] = useState(false);

  const handleDelete = () => {
    deleteRecord(exercise.time_record, idx);
    setStart(false);
  }

  const recordStart = () => {
    setStart(!start);
  }

  useEffect(()=> {
    let interval :any = null;
    if(start) {
      interval = setInterval(()=> {
        getRecordValue(sec, idx);
        setSec((cur) => cur + 1);
      }, 1000);
    } else if (!start && sec !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[start, sec, getRecordValue, idx]);

  function secToTime(duration:number) {
    let seconds :(number|string) = Math.floor(duration % 60); 
    let minutes :(number|string) = Math.floor((duration / 60) % 60); 
    let hours :(number|string) = Math.floor((duration / (60 * 60)) % 24); 
    hours = (hours < 10) ? "0" + hours : hours; 
    minutes = (minutes < 10) ? "0" + minutes : minutes; 
    seconds = (seconds < 10) ? "0" + seconds : seconds; 
    return hours + ":" + minutes + ":" + seconds; 
  } 
  
  if(!exercise) {
    return null;
  }
  return (
    <div>
      <ExerciseContainer>
          <div className='exercise-name'>
            {exercise.genre}  
          </div>
          <div className='exercise-weight'>
            {exercise.weight} kg
          </div>
          <div className='exercise-count'>
            {exercise.count} 회
          </div>
      </ExerciseContainer>
      <TimerContainer>
          <button className={start? "stop":"start"} onClick={recordStart}>
            {start? '멈춤':'시작'}
          </button>
          <div className={`time ${start}`}>
            {secToTime(exercise.time_record)}
          </div>
          <div className='delete-button' onClick={handleDelete}>
            <i className="fa-solid fa-trash-can"></i>
          </div>
      </TimerContainer>
    </div>
  )
}

export default Record;