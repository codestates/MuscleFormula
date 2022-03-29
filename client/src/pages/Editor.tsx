import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CalendarRecord from "../components/CalendarRecord";
import { useSelector, useDispatch } from "react-redux";
import { RESET } from "../reducer/shareReducer";
import type { RootState, AppDispatch} from "../store";

export const Main = styled.div`
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
    height: 60vh;
    width: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;
  }
`;


const Editor = () => {
  //공유한 기록 redux에서 불러오기
  interface RecordType {
    genre: string, 
    weight: number, 
    count: number, 
    time_record :number
  }
  let shareRecords = useSelector((state: RootState) => state.shareRecord.shareRecord);
  let JSONRecords = JSON.stringify(shareRecords);
  let copyRecords = JSON.parse(JSONRecords); 
  let dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(RESET());
    navigate('/main');
  }
  
  return (
    <div id="EditorPage">
      <Main>
        <div id="editor-container">
          <div>사진</div>
          <div>공유한 기록
            {copyRecords.map((record:RecordType, idx:number) => <CalendarRecord key={idx} record={record}/>)}
          </div>
          <div><button onClick={handleSubmit}>공유하기</button></div>
          <div></div>
        </div>
      </Main>
    </div>
  );
}
export default Editor