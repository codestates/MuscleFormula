import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PLUS, MINUS, CHOICE } from "../reducer/counterReducer";
import { ADD, QUAN, OUT } from "../reducer/testReducer";
import { LOG_IN, LOG_OUT } from "../reducer/userInfoReducer";
import { useState } from "react";
import type { RootState, AppDispatch } from "../store";
import styled from "styled-components";
import StarPoint from "../components/StarPoint";

const Test = styled.div`
  margin: 6rem;
  > p > div {
    border: 1px solid red;
  }
`;
const LabelWrap = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;

  width: 150px;
  height: 150px;
  border: 1px solid #dcdbe3;
  background-color: #fafafd;
  i {
    font-size: 30px;
    color: #dcdbe3;
  }
`;
const ImgTitle = styled.h1`
  color: #dcdbe3;
`;
const ImgFile = styled.input`
  text-decoration: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  font-size: 0;
  opacity: 0;
`;

function EditorTest() {
  const [titleContent, setTitleContent] = useState<string | null>("");
  const [togle, setTogle] = useState<boolean | null>(false);
  const [myImage, setMyImage] = useState<any>([]);

  const [postfiles, setPostfiles] = useState<any>({
    file: [],
    previewURL: "",
  });

  const uploadFile = (e: any) => {
    e.stopPropagation();
    let reader = new FileReader();
    let file = e.target.files[0];
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

  let profile_preview = null;
  if (postfiles.file !== null) {
    profile_preview = postfiles.file[0]?.type.includes("image/") ? (
      <img src={postfiles.previewURL} />
    ) : (
      <video src={postfiles.previewURL} />
    );
  }

  console.log("togle:", togle);
  console.log("titleContent:", titleContent);
  const handleClick = () => {
    setTogle(!togle);
  };

  return (
    <Test>
      <button type="button" onClick={handleClick}>
        토글버튼
      </button>
      <p>
        제목
        {togle ? (
          <div
            id="editor"
            contentEditable="true"
            onInput={(e) => setTitleContent(e.currentTarget.textContent)}
          ></div>
        ) : (
          <div>{titleContent}</div>
        )}
      </p>
      <p>사진넣기</p>
      <input
        id="upload-file"
        type="file"
        accept="image/*, video/*"
        multiple
        onChange={uploadFile}
      ></input>
      <label htmlFor="upload-file">파일선택</label>

      <p>미리보기 사진</p>

      <p>공유된내용</p>
      <p>
        난이도
        <StarPoint />
      </p>
      <p>운동부위</p>
      <p>
        소감 <textarea></textarea>
      </p>
    </Test>
  );
}

export default EditorTest;
