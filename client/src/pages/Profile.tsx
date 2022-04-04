import "../css/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import React, { useState, useEffect } from "react";
import PhotoModal from "../components/Modals/PhotoModal";
import { axios_GetNickname } from "../axios";
import axios from "axios";
import { EDIT_NICK } from "../reducer/userInfoReducer";

export default function Profile() {
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }

  //photouploader 변수 선언
  const [photo, setPhoto] = useState<any>({
    file: [],
    previewURL: "",
  });

  const [photoModal, setPhotoModal] = useState(false)

  const openPhotoModal = () => {
    setPhotoModal(!photoModal);
  }

  const [userNickname, setUserNickname] = useState(user.nickname);
  const [userNicknameCheck, setUserNicknameCheck] = useState(true);
  const changeNickname = (e :React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname(e.target.value);
  }
  let dispatch = useDispatch();

  console.log('유저닉네임', userNickname);
  useEffect(()=> {
    axios_GetNickname(userNickname)
    .then((res)=> {
      setUserNicknameCheck(true);
    })
    .catch((err)=> {
      setUserNicknameCheck(false);
    });
  },[userNickname])

  console.log('토큰',user.accessToken);
  console.log('유저닉넴', userNickname);
  const handleProfileNick = () => {
    const formData = new FormData();
    formData.append("nickname", userNickname);
    // formData.append("email", photo.file[0]);
    // formData.append("password", photo.file[0]);
    let serverUrl='http://localhost:4000';
    axios.put(
      `${serverUrl}/user`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
    .then((res)=> {
      dispatch(EDIT_NICK(res.data.Data.nickname));
    });
  };

  return (
    <div id="profile-setting-container-wrapper">
      <div id="profile-setting-container">
        <div className="profile-photo-setting">
          <div className="photo-wrapper">
            <img src={user.image} alt="user_image" onClick={openPhotoModal}/>
            {photoModal ? <PhotoModal 
                        photo={photo} 
                        setPhoto={setPhoto} 
                        setPhotoModal={setPhotoModal}
                      /> : null}
          </div>
         </div>
        <div className="profile-nickname-setting">
          <input
          type="text"
          placeholder={user.nickname}
          onChange={changeNickname}/>
          <div>
            {userNicknameCheck? <p> 사용 가능한 닉네임입니다 </p> : <p> 동일한 닉네임이 존재합니다 </p>}
          </div>
        </div>
        <div className="profile-password-setting">
        </div>
        <div className="edit-button">
          <button onClick={handleProfileNick}>수정하기</button>
        </div>
        <div className="quit">
          더 이상 서비스를 이용하지 않으신다고요? <strong>탈퇴하기</strong>
        </div>
      </div>
    </div>
  )
}
