import "../css/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import React, { useState, useEffect } from "react";
import PhotoModal from "../components/Modals/PhotoModal";
import { axios_GetNickname } from "../axios";
import axios from "axios";
import { EDIT_NICK } from "../reducer/userInfoReducer";
import QuitModal from "../components/Modals/QuitModal";

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

  const [quitModal, setQuitModal] = useState(false);
  const openQuitModal = () => {
    setQuitModal(!quitModal)
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

  const handleProfileNick = () => {
    if (user.nickname === userNickname) {
      return alert('동일한 닉네임입니다');
    }
    if(userNicknameCheck) {
      if (userNickname.length === 0){
        return alert('닉네임을 입력해주세요');
      } else {
        const formData = new FormData();
        formData.append("nickname", userNickname);
        let serverUrl='http://localhost:4000';
        axios.put(
        `${serverUrl}/user`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((res)=> {
          dispatch(EDIT_NICK(res.data.Data.nickname));
          return alert('닉네임이 변경되었습니다');
        });
      }
    } else {
      return alert('다른 닉네임을 입력해주세요');
    }
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
            {userNicknameCheck? <p> </p> : <p className="same-nickname"> 동일한 닉네임이 존재합니다 </p>}
          </div>
        </div>
        <div className="nickname-edit-button">
            <button onClick={handleProfileNick}>닉네임 수정</button>
          </div>
        <div className="quit">
          더 이상 서비스를 이용하지 않으신다고요? <strong onClick={()=> setQuitModal((cur)=> !cur)}>탈퇴하기</strong>
          {quitModal? <QuitModal setQuitModal={setQuitModal}/> : null}
        </div>
      </div>
    </div>
  )
}
