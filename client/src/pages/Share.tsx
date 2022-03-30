/**공유 전 페이지 : 날짜별 운동 기록을 클릭하고 공유하기 버튼을 클릭**/
import Calendar from "../components/Calendar";
import { useState, useEffect } from "react";
import "../css/Share.css";
import CalendarRecord from "../components/CalendarRecord";
import { generatePath, useNavigate } from "react-router-dom";
//공유하기 버튼을 누르면 Post Editor로 이동
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { SHARE } from "../reducer/shareReducer";
import axios from "axios";

export default function Share () {
  const [date, setDate] = useState('');
  let shareRecords = useSelector((state: RootState) => state.shareRecord.shareRecord);
  const [records, setRecords] = useState(shareRecords)
  let dispatch: AppDispatch = useDispatch();
  //로컬스토리지에서 토큰 가져옴
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem('userInfo');
  if (localUser !== null ) {
    user = JSON.parse(localUser);
  };
  console.log('데이트다',date);
  //TODO 로컬 대신 서버에서 가져와야함
  let serverUrl = 'http://localhost:4000'
  useEffect(()=> {
    if (date) {
      axios
      .get(`${serverUrl}/users/record?date=${date}`,
        { 
          headers: {
            authorization: `Bearer ${user.accessToken}`
          }
        })
      .then((res) => {
        console.log(res,'랄랄라');
        setRecords(res.data.data.exerciseInfo);
      })
      .catch(() => {
        setRecords([{ genre: '', weight: 0, count: 0, time_record: 0}])
      })
    }
  },[date]);

  const handleShare = () => {
    if(records.length === 0) {
      // setRecords([{ genre: '', weight: 0, count: 0, time_record: 0}]);
      return alert('공유할 기록이 없습니다');
    } else {
      dispatch(SHARE(records));
      navigate("/editor");
    }
  }

  const navigate = useNavigate();

  return (
    <div id="share-container">
      <div id ="calendar-container">
        <Calendar date={date} setDate={setDate}/>
      </div>
      <div id ="calendar-record-container">
        {records.map((record, idx)=><CalendarRecord key={idx} record={record}/>)}
      </div>
      <div>
        <button onClick={handleShare}>선택하기</button>
      </div>
    </div>
  )
}