import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CalendarRecord from "../components/CalendarRecord";
import { useSelector, useDispatch } from "react-redux";
import { RESET } from "../reducer/shareReducer";
import type { RootState, AppDispatch } from "../store";
import ImgTest from "../components/ImgTest";
import axios from "axios";
import StarPoint from "../components/StarPoint";
const FormData = require("form-data");
const form = new FormData();

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
  }
`;

const Editor = () => {
  const [titleContent, setTitleContent] = useState<string | null>("");
  const [textContent, setTextContent] = useState<string | null>("");
  console.log("titleContent:", titleContent);
  const [postfiles, setPostfiles] = useState<any>({
    file: [],
    previewURL: "",
  });
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
  const [difficult, setDifficult] = useState(0);

  //total타임 shareRecords에서 계산
  console.log("shareRecords에서 time_record", shareRecords);

  let dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("전송 파일 : ", postfiles.file[0]);
    const formData = new FormData();

    formData.append("postImage", postfiles.file[0]);
    formData.append("postTitle", titleContent);
    formData.append("info", textContent);
    formData.append("totalTime", 100);
    formData.append("bodyPart", "상체");
    formData.append("difficult", difficult);
    formData.append("userId", user.id);
    formData.append("exceriseInfo", recordId);

    axios.post("http://localhost:4000/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // authorization: `Bearer ${token}`,
      },
      // withCredentials: true,
    });
    dispatch(RESET());
    navigate("/main");
  };
  const handleSubmitInner = () => {
    // console.log("전송 파일 : ", postfiles.file[0]);
    // const formData = new FormData();
    // formData.append("postImage", postfiles.file[0]);
    // formData.append("postTitle", titleContent);
    // formData.append("info", textContent);
    // formData.append("totalTime", 100);
    // formData.append("bodyPart", "상체");
    // formData.append("difficult", 4);
    // formData.append("userId", 1);
    // formData.append("exceriseInfo", 1);
    // axios.post("http://localhost:4000/posts", formData, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     // authorization: `Bearer ${token}`,
    //   },
    //   // withCredentials: true,
    // });
  };

  console.log("postfiles:", postfiles);
  return (
    <div id="EditorPage">
      <Main>
        <div id="editor-container">
          <div>제목</div>
          <div
            id="editor"
            contentEditable="true"
            onInput={(e) => setTitleContent(e.currentTarget.textContent)}
          >
            제목적기
          </div>
          <ImgTest postfiles={postfiles} setPostfiles={setPostfiles}></ImgTest>
          <div id="record-container">
            공유한 기록
            {shareRecords.map((record: RecordType, idx: number) => (
              <CalendarRecord key={idx} record={record} />
            ))}
          </div>
          <div>내용</div>
          <div
            id="editor"
            contentEditable="true"
            onInput={(e) => setTextContent(e.currentTarget.textContent)}
          >
            내용적기
          </div>
          <div>드롭다운 (상체, 하체, 전신)</div>
          <div>
            난이도
            <div>
              <StarPoint setValue={setDifficult} />
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
