/**날짜별 운동 기록 페이지**/
import "../css/Record.css";
import Record from "../components/Record";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import CalendarRecord from "../components/CalendarRecord";
export default function Records() {

  const showToday = () => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let daynum = today.getDay();

    const checkDay = (daynum: number): string => {
      let day = "";
      let week = ["일", "월", "화", "수", "목", "금", "토"];
      return day = week[daynum];
    };

    return `${month}월 ${date}일 ${checkDay(daynum)}요일`
  }
  
  const getDate = () => {
    let today = new Date();
    let year: number | string = today.getFullYear();
    let month: number | string = today.getMonth() + 1;
    let date: number | string = today.getDate();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    return `${year}-${month}-${date}`;
  };
  
  interface RecordType {
    genre: string;
    weight: number;
    count: number;
    time_record: number;
  }

  const [savedRecords, setSavedRecords] =  useState<RecordType[]>([]);
  const [submitDay, setSubmitDay] = useState(getDate());
  let serverUrl = 'http://localhost:4000'
  
  useEffect(()=> {
    if (submitDay) {
      axios
      .get(`${serverUrl}/users/record?date=${submitDay}`,
        { 
          headers: {
            authorization: `Bearer ${user.accessToken}`
          }
        })
      .then((res) => {
        setSavedRecords(res.data.data.exerciseInfo);
      })
    }
  },[]);

  function showTime(duration: number) {
    let seconds: number | string = Math.floor(duration % 60);
    let minutes: number | string = Math.floor((duration / 60) % 60);
    let hours: number | string = Math.floor((duration / (60 * 60)) % 24);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + "시간 " + minutes + "분 " + seconds + "초";
  }

  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }

  const [records, setRecords] = useState<RecordType[]>([]);
  const [exercise, setExercise] = useState({
    genre: "",
    weight: 0,
    count: 0,
    time_record: 0,
  });

  const submitRecord = () => {
    let serverUrl = "http://localhost:4000";
    axios
      .post(
        `${serverUrl}/users/record`,
        {
          userId: user.id,
          record: records,
        },
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
          // withCredentials: true
        }
      )
      .then(() => {
        axios
        .get(`${serverUrl}/users/record?date=${submitDay}`,
          { 
            headers: {
            authorization: `Bearer ${user.accessToken}`
            }
          })
        .then((res) => {
          setSavedRecords(res.data.data.exerciseInfo);
          setRecords([]);
      })
      });
  };

  const deleteRecord = (sec: number, deleteIndex: number) => {
    const restRecords = records.filter((record, idx) => idx !== deleteIndex);
    setRecords(restRecords);
  };

  const handleInputValue =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setExercise({ ...exercise, [key]: e.target.value });
    };

  const getRecordValue = (sec: number, idx: number) => {
    records.forEach((record, i) => {
      if (idx === i) {
        record.time_record = sec + 1;
      }
    });
  };

  const totalTime = () => {
    return savedRecords.reduce((acc, cur) => {
      return acc + cur.time_record;
    }, 0);
  };

  const addExercise = () => {
    if (exercise.genre === "") {
      return alert("운동명을 입력하세요");
    } else {
      setExercise({
        genre: "",
        weight: 0,
        count: 0,
        time_record: 0,
      });
      setRecords((currentList) => [...currentList, exercise]);
    }
  };

  return (
    <div id="record-container">
      <div className="record-today">
        <i className="fa-solid fa-calendar-days"></i> {showToday()}
      </div>
      <div className="record-uploaded">
       {savedRecords.map((record, idx) => <CalendarRecord key={idx} record={record}/>)}
      </div>
      <div className="record-total">
        <div className="record-time">{showTime(totalTime())}</div>
        <div className="record-time-detail">운동했습니다</div>
      </div>
      <div className="exercise-input-container">
        <div className="greeting">오늘은 어떤 운동을 할까요?</div>
        <input
          className="exercise"
          type="text"
          placeholder="운동명을 입력하세요"
          value={exercise.genre}
          onChange={handleInputValue("genre")}
        />
        <div className="number-container">
          <input
            className="number"
            type="number"
            min="0"
            value={exercise.weight}
            onChange={handleInputValue("weight")}
          />{" "}
          kg
          <input
            className="number"
            type="number"
            min="0"
            value={exercise.count}
            onChange={handleInputValue("count")}
          />{" "}
          회
        </div>
        <button onClick={addExercise}>입력</button>
      </div>
      <div className="exercise-container">
        {records.map((exercise, idx) => (
          <Record
            key={idx}
            exercise={exercise}
            deleteRecord={deleteRecord}
            idx={idx}
            getRecordValue={getRecordValue}
          />
        ))}
      </div>
      {records.length ? (
        <div className="record-save">
          <button className="record-save" onClick={submitRecord}>
            기록하기
          </button>
        </div>
      ) : null}
    </div>
  );
}
