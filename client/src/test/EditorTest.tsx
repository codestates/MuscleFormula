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
  return (
    <Test>
      <p>
        제목
        <input type="text"></input>
      </p>
      <p>사진넣기</p>
      <Label htmlFor="input_file">
        <i className="fas fa-camera"></i>
        {/* //들어갈 아이콘 */}
        <ImgTitle>이미지 업로드</ImgTitle>
        {/* //이미지업로드라는 글씨 */}
        <ImgFile
          id="input_file"
          type="file"
          accept="image/*"
          // multiple
          // {...register("img", {
          //   required: "이미지를 업로드해주세요",
          //   onChange: async (event) => {
          //     let files = event.target.files;
          //     if (files && files.length) {
          //       if (imageUrls.length > 2) {
          //         return Swal.fire({
          //           text: "사진첨부는 최대 3장까지 가능합니다",
          //           confirmButtonText: "확인",
          //           confirmButtonColor: "#2f6218",
          //           icon: "warning",
          //         });
          //       }
          //       let urls = await convertManyFilesToURL(files);
          //       setImageUrls((prev) => {
          //         return [...prev, ...urls];
          //       });
          //       setImageStore([...imageStore, ...files]);
          //     }
          //   },
          // })}
        />
      </Label>
      <p>미리보기 사진</p>
      <p>공유된내용</p>
      <p>
        난이도
        <StarPoint />
      </p>
      <p>운동부위</p>
      <p>
        소감 <input type="text"></input>
      </p>
    </Test>
  );
}

export default EditorTest;
