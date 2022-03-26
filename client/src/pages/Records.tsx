/**날짜별 운동 기록 페이지**/
import '../css/Record.css'
import Record from '../components/Record'
import React, { useState} from 'react';
export default function Records() {

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let daynum = today.getDay();

  //오늘 날짜 기록
  const checkDay = (daynum :number) :string => {
    let day = '';
    switch (daynum) {
      case 0 : day = '일'; break;
      case 1 : day = '월'; break;
      case 2 : day = '화'; break;
      case 3 : day = '수'; break;
      case 4 : day = '목'; break;
      case 5 : day = '금'; break;
      case 6 : day = '토'; break;
      default: break;
    }
    return day;
  }

  //총 시간 기록
  const [totalSec, setTotalSec] = useState(0);

  function secToTime(duration:number) {
    let seconds :(number|string) = Math.floor(duration % 60); 
    let minutes :(number|string) = Math.floor((duration / 60) % 60); 
    let hours :(number|string) = Math.floor((duration / (60 * 60)) % 24); 
    hours = (hours < 10) ? "0" + hours : hours; 
    minutes = (minutes < 10) ? "0" + minutes : minutes; 
    seconds = (seconds < 10) ? "0" + seconds : seconds; 
    return hours + ":" + minutes + ":" + seconds; 
  }

  interface RecordType {
    genre: string,
    weight: number,
    count: number,
    time_record: number
  }

  const [records, setRecords] = useState<RecordType[]>([]);
  const [exercise, setExercise] = useState({
    genre: '',
    weight: 0,
    count: 0,
    time_record: 0
  })

  const deleteRecord = (sec:number, deleteIndex:number) => {
    setTotalSec((cur)=> cur - sec);
    const restRecords = records.filter((record, idx)=> idx !== deleteIndex);
    setRecords(restRecords);
  }

  const handleInputValue = (key:string) => (e:React.ChangeEvent<HTMLInputElement>) => {
    setExercise({...exercise, [key]: e.target.value})
  }

  const getRecordValue = (sec: number, idx: number) => {
    records.forEach((record, i) => {
      if(i === idx) record.time_record = sec;
    });
  }

  const addExercise = () => {
    setExercise({
      genre: '',
      weight: 0,
      count: 0,
      time_record: 0
    });
    setRecords((currentList) => [...currentList, exercise]);
  }

  console.log('레코드기록', records);

  return (
    <div id='record-container'>
      <div className='record-today'>
        {year}년 {month}월 {date}일 {checkDay(daynum)}요일
      </div>
      <div className='record-total'>
        {secToTime(totalSec)} 운동했습니다
      </div>
      <div className='exercise-input-container'>
          오늘 할 운동 <input type='text' value={exercise.genre} onChange={handleInputValue('genre')}/>
          중량 <input type='number' min="0" value={exercise.weight} onChange={handleInputValue('weight')}/>kg
          목표 횟수 <input type='number' min="0" value={exercise.count} onChange={handleInputValue('count')}/> 회
          <button onClick={addExercise}>추가</button> 
      </div>
      <div className='exercise-container'>
        <div className='exercise-name'>
          {records.map((exercise, idx) => 
          <Record key={idx} 
                  exercise={exercise} 
                  setTotalSec={setTotalSec} 
                  deleteRecord={deleteRecord}
                  getRecordValue={getRecordValue} 
                  idx={idx}
                  />)}
        </div>
      </div>
    </div>
  )
}
