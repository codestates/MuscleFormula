import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import PhotoUploader from "../PhotoUploader";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { EDIT_IMAGE } from "../../reducer/userInfoReducer";
import { axios_Put_User } from "../../axios";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

export const ModalView = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  width: 310px;
  height: 20rem;
  > .desc {
    display: flex;
    flex-direction: column;
    margin: 1rem 0rem;
    > .close-btn {
      color: black;
      cursor: pointer;
      text-align: right;
      margin: 0rem 1rem;
      font-size: large;
    }
    > .photoUploader-wrapper {
      margin: 1rem 1rem;
      height: 200px;
    }
    > .choice {
      margin-bottom: 2rem;
      > button {
        font-size: medium;
        cursor: pointer;
        background-color: black;
        color: white;
        border: none;
        padding: 0.3rem 1rem;
        border-radius: 10px;
      }
    }
  }
`;

interface PhotoModalProps {
  photo: any;
  setPhoto: React.Dispatch<any>;
  setPhotoModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  photo,
  setPhoto,
  setPhotoModal,
}) => {
  let dispatch: AppDispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
    setPhotoModal((cur) => !cur);
  };

  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }

  const handleProfilePhoto = () => {
    //서버로 바뀐 사진 정보 보내면 됨
    const formData = new FormData();
    formData.append("userImage", photo.file[0]);
    // formData.append("email", photo.file[0]);
    // formData.append("password", photo.file[0]);
    // formData.append("nickname", photo.file[0]);
    // let serverUrl = "http://localhost:4000";

    axios_Put_User(formData, user.accessToken).then((res) => {
      setPhotoModal((cur) => !cur);
      dispatch(EDIT_IMAGE(res.data.Data.image));
    });
  };

  return (
    <ModalContainer>
      {isOpen === true ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <div className="desc">
              <span onClick={openModalHandler} className="close-btn">
                <i className="fa-regular fa-circle-xmark"></i>
              </span>
              <div className="photoUploader-wrapper">
                <PhotoUploader photo={photo} setPhoto={setPhoto} photoUrl="" />
              </div>
              <div className="choice">
                <button onClick={handleProfilePhoto}>선택하기</button>
              </div>
            </div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default PhotoModal;
