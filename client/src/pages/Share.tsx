/**공유 전 페이지 : 날짜별 운동 기록을 클릭하고 공유하기 버튼을 클릭**/
import { PC, Mobile } from "../mediaQuery";
import Footer from "../components/Footer";
import Calendar from "../components/Calendar";
import { useState, useEffect } from "react";
import "../css/Share.css";
import CalendarRecord from "../components/CalendarRecord";
import { generatePath, useNavigate } from "react-router-dom";
//공유하기 버튼을 누르면 Post Editor로 이동
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { SHARE, SHARE_ID } from "../reducer/shareReducer";
import axios from "axios";
import NoRecord from "../components/NoRecord";
import NeedLogin from "../components/NeedLogin";
import {
  axios_Delete_UserRecord,
  axios_Get_UserRecord_Date,
} from "../axios/index";

export default function Share() {
  const getDate = () => {
    let today = new Date();
    let year: number | string = today.getFullYear();
    let month: number | string = today.getMonth() + 1;
    let date: number | string = today.getDate();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    return `${year}-${month}-${date}`;
  };
  const [date, setDate] = useState(getDate());

  let shareRecords = useSelector(
    (state: RootState) => state.shareRecord.shareRecord
  );
  let shareRecordsId = useSelector(
    (state: RootState) => state.shareRecord.shareRecordId
  );
  const [records, setRecords] = useState(shareRecords);
  const [recordsId, setRecordsId] = useState(shareRecordsId);
  let dispatch: AppDispatch = useDispatch();
  //로컬스토리지에서 토큰 가져옴
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }
  let isLogin = useSelector((state: RootState) => state.userInfo.isLogin);
  const localLogin = localStorage.getItem("isLogin");
  if (localLogin !== null) {
    isLogin = JSON.parse(localLogin);
  }
  //TODO 로컬 대신 서버에서 가져와야함
  useEffect(() => {
    if (date) {
      axios_Get_UserRecord_Date(date, user.accessToken)
        .then((res) => {
          setRecords(res.data.data.exerciseInfo);
          setRecordsId(res.data.data.recordId);
        })
        .catch(() => {
          setRecords(null);
        });
    }
  }, [date]);

  const handleShare = () => {
    if (records === null) {
      return alert("공유할 기록이 없습니다");
    } else {
      dispatch(SHARE(records));
      dispatch(SHARE_ID(recordsId));
      navigate("/editor");
    }
  };

  const navigate = useNavigate();

  return (
    <div id="share-container-wrapper">
      <div>
          {isLogin === false ? (
            <div id="no-share-container">
              <NeedLogin />
            </div>
          ) : (
            <div id="share-container">
              <div id="calendar-container">
                <Calendar date={date} setDate={setDate} />
              </div>
              <div id="calendar-record-container">
                {records !== null ? (
                  records.map((record, idx) => (
                    <CalendarRecord key={idx} record={record} />
                  ))
                ) : (
                  <NoRecord />
                )}
              </div>
              <div id="share-button">
                <button
                  className={records ? "show" : "no-show"}
                  onClick={handleShare}
                >
                  선택하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
  );
}
