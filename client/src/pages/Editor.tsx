import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CalendarRecord from "../components/CalendarRecord";
import { useSelector, useDispatch } from "react-redux";
import { RESET } from "../reducer/shareReducer";
import type { RootState, AppDispatch } from "../store";
import StarPoint from "../components/StarPoint";
import { axios_CreatePost } from "../axios";
import PhotoUploader from "../components/PhotoUploader";

const FormData = require("form-data");

export const Main = styled.div`
  margin: 10rem 0rem;
  border: 3px solid green;
  padding: 10px;
  /* 화면 중앙으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  > #editor-container {
    border: 3px solid green;
    padding: 10px;
    height: 90vh;
    width: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
    > #record-container {
      border: 3px solid green;
    }
    > #editor-titleContent {
      border: 3px solid gray;
    }
    > #editor-textContent {
      border: 3px solid gray;
    }
  }
`;

const Editor = () => {
  const [titleContent, setTitleContent] = useState<string | null>("");
  const [textContent, setTextContent] = useState<string | null>("");
  const [bodyPart, setBodyPart] = useState<string | null>("");
  const [photo, setPhoto] = useState<any>({
    file: [],
    previewURL: "",
  });
  const [difficult, setDifficult] = useState(0);

  //공유한 기록 redux에서 불러오기
  interface RecordType {
    genre: string;
    weight: number;
    count: number;
    time_record: number;
  }
  //유저
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }

  //기록아이디
  let recordId = useSelector(
    (state: RootState) => state.shareRecord.shareRecordId
  );
  const localRecordsId = localStorage.getItem("shareRecordsId");
  if (localRecordsId !== null) {
    recordId = JSON.parse(localRecordsId);
  }

  //공유한기록
  let shareRecords = useSelector(
    (state: RootState) => state.shareRecord.shareRecord
  );
  const localRecords = localStorage.getItem("shareRecords");
  if (localRecords !== null) {
    shareRecords = JSON.parse(localRecords);
  }

  //difficult

  //total타임 shareRecords에서 계산
  console.log("shareRecords에서 time_record", shareRecords);
<<<<<<< HEAD
=======
  let shareRecordsTotalTime = 0;
  if (shareRecords !== null) {
    shareRecordsTotalTime = shareRecords.reduce((a, b) => {
      return a + b.time_record;
    }, 0);
  }
  console.log("shareRecordsTotalTime", shareRecordsTotalTime);
>>>>>>> feature

  let dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("postImage", photo.file[0]);
    formData.append("postTitle", titleContent);
    formData.append("info", textContent);
    formData.append("totalTime", shareRecordsTotalTime);
    formData.append("bodyPart", bodyPart);
    formData.append("difficult", difficult);
    formData.append("userId", user.id);
    formData.append("exerciseInfo", recordId);

    axios_CreatePost(formData, user.accessToken);
    dispatch(RESET());
    // navigate("/main");
    // location.reload(); // 새로고침 내장함수 추가
    window.location.replace("/main"); // 새로고침후 이동
  };

  const handleGetbodyPart = (e: any) => {
    console.log("e.target.value:", e.target.value);
    setBodyPart(e.target.value);
  };
  return (
    <div id="EditorPage">
      <Main>
        <div id="editor-container">
          <div>제목</div>
          <div
            id="editor-titleContent"
            contentEditable="true"
            onInput={(e) => setTitleContent(e.currentTarget.textContent)}
          ></div>
          <PhotoUploader photo={photo} setPhoto={setPhoto} photoUrl=""/>
          <div id="record-container">
            공유한 기록
            {shareRecords !== null
              ? shareRecords.map((record: RecordType, idx: number) => (
                  <CalendarRecord key={idx} record={record} submitDelete />
                ))
              : null}
          </div>
          <div>내용</div>
          <div
            id="editor-textContent"
            contentEditable="true"
            onInput={(e) => setTextContent(e.currentTarget.textContent)}
          ></div>
          <div>드롭다운 (상체, 하체, 전신)</div>
<<<<<<< HEAD
          <div>
            난이도
            <div>
              <StarPoint setValue={setDifficult} />
=======
          <select id="dropdown" onChange={handleGetbodyPart}>
            <option value="미선택">선택해주세요</option>
            <option value="전신">전신</option>
            <option value="상체">상체</option>
            <option value="하체">하체</option>
          </select>
          <div>
            난이도
            <div>
              <StarPoint setDifficult={setDifficult} />
>>>>>>> feature
            </div>
          </div>
          <div>
            <button onClick={handleSubmit}>공유하기</button>
          </div>
        </div>
      </Main>
    </div>
  );
};
export default Editor;
