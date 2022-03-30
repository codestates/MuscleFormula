import axios from "axios";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PLUS, MINUS, CHOICE } from "../reducer/counterReducer";
import { ADD, QUAN, OUT } from "../reducer/testReducer";
import { LOG_IN, LOG_OUT } from "../reducer/userInfoReducer";
import { useState } from "react";
import type { RootState, AppDispatch } from "../store";
import styled from "styled-components";
import StarPoint from "../components/StarPoint";
import { useForm } from "react-hook-form";
const FormData = require("form-data");
// const fs = require("fs");
const form = new FormData();

const Test = styled.div`
  margin: 6rem;
  > p > div {
    border: 1px solid red;
  }
`;
function ImgTest() {
  const [postfiles, setPostfiles] = useState<any>({
    file: [],
    previewURL: "",
  });
  console.log("postfiles :", postfiles);

  const handleSubmit = () => {
    console.log("전송 파일 : ", postfiles.file[0]);
    const formData = new FormData();
    formData.append("postImage", postfiles.file[0]);
    formData.append("postTitle", "제목입니다");
    formData.append("info", "내용입니다");
    formData.append("totalTime", 100);
    formData.append("bodyPart", "상체");
    formData.append("difficult", 4);
    formData.append("userId", 1);

    axios.post("http://localhost:4000/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        // authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
  };

  const uploadFile = (e: any) => {
    console.log("input img", e);
    console.log("e.stopPropagation: ", e.stopPropagation);
    e.stopPropagation();
    // 파일 또는 Blob 개체를 사용하여 읽을 파일 또는 데이터를 지정하여
    // 웹 응용 프로그램이 사용자 컴퓨터에 저장된 파일(또는 원시 데이터 버퍼)의 내용을
    // 비동기적으로 읽을 수 있도록 합니다.
    let reader = new FileReader();
    console.log("reader :", reader);
    let file = e.target.files[0];
    console.log("e.target.files :", e.target.files);
    const filesInArr = Array.from(e.target.files);

    reader.onloadend = () => {
      setPostfiles({
        file: filesInArr,
        previewURL: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  ////////////////////////////////////////////////////////////////
  let profile_preview = null;
  if (postfiles.file !== null) {
    profile_preview = postfiles.file[0]?.type.includes("image/") ? (
      <img src={postfiles.previewURL} style={{ height: "200px" }} />
    ) : (
      <video src={postfiles.previewURL} />
    );
  }

  return (
    <Test>
      <p>내용</p>
      <input
        id="upload-file"
        type="file"
        accept="image/*, video/*"
        multiple
        onChange={uploadFile}
      ></input>
      <label htmlFor="upload-file">파일선택</label>
      <br />
      미리보기
      <div>
        <div>{profile_preview}</div>
      </div>
      <br />
      <br />
      <br />
      <div></div>
      <button type="button" onClick={handleSubmit}>
        전송버튼
      </button>
    </Test>
  );
}

export default ImgTest;
