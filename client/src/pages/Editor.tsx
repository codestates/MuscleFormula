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

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 6rem 0rem;
  > #editor-container{
    border-radius: 25px;
    border: 1px solid lightgrey;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 35rem;
    width: 310px;
    justify-content: center;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
    > [contenteditable] {
      outline: 0px solid transparent;
    }
    > #editor-title {
      margin-top: 1rem;
      border-bottom: 1px solid lightgrey;
      font-size: x-large;
      padding-bottom: 0.5rem;
    }
    > #editor-title:focus {
      outline: none;
    }
    > #editor-title:empty:before{
      content: attr(placeholder);
      color: grey;
      display: block; 
    }
    > #photo-container {
      margin: 1rem;
    }
    > #record-container {
      margin : 0.5rem;
    }
    > #editor-text{
      margin : 0.5rem;
      border-bottom: 1px solid lightgrey;
      font-size: medium;
      padding-bottom: 0.7rem;
    }
    > #editor-text:empty:before{
      content: attr(placeholder);
      color: grey;
      display: block;
    }
    > #dropdown-container {
      margin : 0.25rem 0.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      > .title {
        width: 6rem;
        font-weight: bold;
      }
      > .dropdown {
        font-size: medium;
        width: 7.5rem;
        border: none;
      }
      > .dropdown:focus {
        outline: none;
      }
    }
    > #difficult-container {
      margin : 0.25rem 0.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      > .title {
        width: 6rem;
        font-weight: bold;
      }
      > .star-point {

      }

    }
    > #share-button-container {
      margin: 2rem 0rem 1rem 0rem;
      display: flex;
      justify-content: center;
      > button {
        width: 10rem;
        font-size: medium;
        cursor: pointer;
        background-color: black;
        color: white;
        border: none;
        padding: 0.3rem;
        border-radius: 10px;
      }
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
  let shareRecordsTotalTime = 0;
  if (shareRecords !== null) {
    shareRecordsTotalTime = shareRecords.reduce((a, b) => {
      return a + b.time_record;
    }, 0);
  }
  console.log("shareRecordsTotalTime", shareRecordsTotalTime);

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
    // formData.append("userId", user.id);
    formData.append("exerciseInfo", recordId);
    console.log(formData);

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
    <EditorContainer>
      <div id="editor-container">
        <div
            id="editor-title"
            contentEditable="true"
            placeholder="제목"
            onInput={(e) => setTitleContent(e.currentTarget.textContent)}
        ></div>
        <div id="photo-container">
          <PhotoUploader photo={photo} setPhoto={setPhoto} photoUrl=""/>
        </div>
        <div id="record-container">
            {shareRecords !== null
              ? shareRecords.map((record: RecordType, idx: number) => (
                  <CalendarRecord key={idx} record={record} />
                ))
              : null}
        </div>
        <div
          id="editor-text"
          contentEditable="true"
          placeholder="내용을 입력해주세요"
          onInput={(e) => setTextContent(e.currentTarget.textContent)}
        ></div>
        <div id="dropdown-container">
          <div className="title">
          운동부위
          </div>
          <select className="dropdown" onChange={handleGetbodyPart}>
            <option value="미선택">선택해주세요</option>
            <option value="전신">전신</option>
            <option value="상체">상체</option>
            <option value="하체">하체</option>
          </select>
        </div>
        <div id="difficult-container">
          <div className="title">
            난이도
          </div>
          <div className="star-point">
            <StarPoint setDifficult={setDifficult} />
          </div>
        </div>
        <div id="share-button-container">
          <button onClick={handleSubmit}>공유하기</button>
        </div>
      </div>
    </EditorContainer>
  );
};
export default Editor;
