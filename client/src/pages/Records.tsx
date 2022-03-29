/**날짜별 운동 기록 페이지**/
import '../css/Record.css'
import Record from '../components/Record'
import React, { useState} from 'react';
import axios from 'axios';
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

  //렌더링할 때 임의의 값
  const [totalSec, setTotalSec] = useState(0);

  function showTime(duration:number) {
    let seconds :(number|string) = Math.floor(duration % 60); 
    let minutes :(number|string) = Math.floor((duration / 60) % 60); 
    let hours :(number|string) = Math.floor((duration / (60 * 60)) % 24); 
    hours = (hours < 10) ? "0" + hours : hours; 
    minutes = (minutes < 10) ? "0" + minutes : minutes; 
    seconds = (seconds < 10) ? "0" + seconds : seconds; 
    return hours + "시간 " + minutes + "분 " + seconds + "초"; 
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

  const getDate = () => {
    let today = new Date();
    let year:(number | string) = today.getFullYear();
    let month:(number | string) = today.getMonth() + 1;
    let date:(number | string) = today.getDate();
    month = (month < 10) ? "0" + month : month;
    date = (date < 10) ? "0" + date : date;
    return `${year}-${month}-${date}`;
  }

  const submitRecord = () => {
    //test: 로컬스토리지로 해당 날짜에 값 넣기
    localStorage.setItem(`${getDate()}`, JSON.stringify(records));
    //TODO서버로 해당 날짜에 값 넣기
  }

  const deleteRecord = (sec:number, deleteIndex:number) => {
    const restRecords = records.filter((record, idx)=> idx !== deleteIndex);
    setRecords(restRecords);
  }

  const handleInputValue = (key:string) => (e:React.ChangeEvent<HTMLInputElement>) => {
    setExercise({...exercise, [key]: e.target.value})
  }

  const getRecordValue = (sec :number, idx:number) => {
    records.forEach((record, i) => {
      if (idx === i) {
        record.time_record = sec + 1;
      }
    })
  };

  //무조건 배열 값의 합이랑 일치
  const totalTime = () => {
    return records.reduce((acc, cur) => {
      return acc + cur.time_record 
    }, 0)
  }

  const addExercise = () => {
    if (exercise.genre==='') {
      return alert('운동명을 입력하세요')
    } else {
      setExercise({
        genre: '',
        weight: 0,
        count: 0,
        time_record: 0
      });
      setRecords((currentList) => [...currentList, exercise]);
    }
  }

  console.log('레코드기록', records);

  return (
    <div id='record-container'>
      <div className='record-today'>
      <i className="fa-solid fa-calendar-days"></i> {month}월 {date}일 {checkDay(daynum)}요일
      </div>
      <div className='record-total'>
        <div className='record-time'>
        {showTime(totalTime())} 
        </div>
        <div className='record-time-detail'>
        운동했습니다
        </div> 
      </div>
      <div className='exercise-input-container'>
          <div className="greeting">오늘은 어떤 운동을 할까요?</div>
          <input className="exercise" type='text' placeholder="운동명을 입력하세요" value={exercise.genre} onChange={handleInputValue('genre')}/>
          <div className='number-container'>
            <input className="number" type='number' min="0" value={exercise.weight} onChange={handleInputValue('weight')}/> kg 
            <input className="number" type='number' min="0" value={exercise.count} onChange={handleInputValue('count')}/> 회
          </div>
          <button onClick={addExercise}>입력</button> 
      </div>
      <div className='exercise-container'>
          {records.map((exercise, idx) => 
          <Record key={idx} 
                  exercise={exercise} 
                  setTotalSec={setTotalSec} 
                  deleteRecord={deleteRecord}
                  idx={idx}
                  getRecordValue={getRecordValue}
                  />)}
      </div>
      {records.length? <div className="record-save"><button className='record-save' onClick={submitRecord}>기록하기</button></div> : null}
    </div>
  )
}
