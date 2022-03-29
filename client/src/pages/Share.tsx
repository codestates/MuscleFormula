/**공유 전 페이지 : 날짜별 운동 기록을 클릭하고 공유하기 버튼을 클릭**/
import Calendar from "../components/Calendar";
import { useState, useEffect } from "react";
import "../css/Share.css";
import CalendarRecord from "../components/CalendarRecord";
import { useNavigate } from "react-router-dom";
//공유하기 버튼을 누르면 Post Editor로 이동
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { SHARE } from "../reducer/shareReducer";

export default function Share () {
  const [date, setDate] = useState('');
  let shareRecords = useSelector((state: RootState) => state.shareRecord.shareRecord);
  let dispatch: AppDispatch = useDispatch();
  //로컬스토리지에서 가져옴
  const getRecords = localStorage.getItem(`${date}`);
  if (getRecords !== null) {
    shareRecords = JSON.parse(getRecords);
  }
  //TODO 로컬 대신 서버에서 가져와야함
  console.log(shareRecords, 'shareRecords입니다');

  const handleShare = () => {
    if(shareRecords.length === 0) {
      return alert('공유할 기록이 없습니다');
    } else {
      dispatch(SHARE(shareRecords));
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
        {shareRecords.map((record, idx)=><CalendarRecord key={idx} record={record}/>)}
      </div>
      <div>
        <button onClick={handleShare}>선택하기</button>
      </div>
    </div>
  )
}