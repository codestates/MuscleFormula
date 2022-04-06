import React from "react";
import styled from "styled-components";
import { useState } from "react";

const PhotoUploaderContainer = styled.div`
  > .upload-show {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    color: grey;
    background-color: lightgrey;
    height: 300px;
    > img {
      width: 100%;
      background-color: white;
    }
    > .default-upload-image {
      display: flex;
      flex-direction: column;
      font-size: large;
      align-items: center;
      justify-content: center;
    }
    > .default-upload-image > i{
      font-size: 3.5rem;
    }
    > input {
      text-decoration: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      font-size: 0;
      opacity: 0;
    }
  }
  > .no-upload-show {
    display: none;
  }
  > .image-show {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    border-radius: 20px;
    > img {
      width: 100%;
    }
    > video {
      width: 100%;
    }
    > input {
      text-decoration: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
      font-size: 0;
      opacity: 0;
    }
  }
  > .no-image-show {
    display: none;
  }
`;

interface PhotoUploaderProps {
  photo: any;
  setPhoto: React.Dispatch<any>;
  photoUrl: string;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  photo,
  setPhoto,
  photoUrl,
}) => {
  // const [photo, setPhoto] = useState<any>({
  //   file: [],
  //   previewURL: "",
  // });
  const [isShow, setIsShow] = useState(true);
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
      setPhoto({
        file: filesInArr,
        previewURL: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  let profile_preview = null;
  if (photo.file !== null) {
    profile_preview = photo.file[0]?.type.includes("image/") ? (
      <img src={photo.previewURL} alt="selected_image" />
    ) : (
      <video src={photo.previewURL} />
    );
  }

  return (
    <PhotoUploaderContainer>
      <label
        className={isShow ? "upload-show" : "no-upload-show"}
        htmlFor="upload-file"
        onClick={() => setIsShow(false)}
      >
        {photoUrl ? (
          <img src={photoUrl} alt="post" style={{ width: "300px" }} />
        ) : (
          <div className="default-upload-image">
            <i className="fas fa-camera"></i>
            이미지 업로드
          </div>
        )}
        <input
          id="upload-file"
          type="file"
          accept="image/*, video/*"
          multiple
          onChange={uploadFile}
        />
      </label>
      <label className={isShow ? "no-image-show" : "image-show"}>
        {profile_preview}
        <input
          id="upload-file"
          type="file"
          accept="image/*, video/*"
          multiple
          onChange={uploadFile}
        />
      </label>
    </PhotoUploaderContainer>
  );
};

export default PhotoUploader;
