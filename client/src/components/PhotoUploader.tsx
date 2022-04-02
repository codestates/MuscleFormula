import React from "react";
import styled from "styled-components";

const PhotoUploaderContainer = styled.div`
  border: 1px solid gray;
  > div {
    display: flex;
    > div {
      border: 1px solid gray;
    }
  }
`;

interface PhotoUploaderProps {
  photo: any;
  setPhoto: React.Dispatch<any>;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ photo, setPhoto }) => {
  // const [photo, setPhoto] = useState<any>({
  //   file: [],
  //   previewURL: "",
  // });
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
      <img src={photo.previewURL} style={{ height: "200px" }} />
    ) : (
      <video src={photo.previewURL} />
    );
  }

  return (
    <PhotoUploaderContainer>
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
    </PhotoUploaderContainer>
  );
};

export default PhotoUploader