import "../css/Profile.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useState } from "react";

export default function Profile() {
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }

  return (
  <div id="profile-setting-container">
    <div className="profile-photo-setting">
      <img src={user.image} alt="user_image"/>
    </div>
    <div className="photo-uploader">
    </div>
    <div className="profile-nickname-setting">
    {user.nickname}
    </div>
    <div className="profile-password-setting">
    </div>
    <div className="edit-button">
      <button>수정하기</button>
    </div>
    <div className="quit-button">
      <button>탈퇴하기</button>
    </div>
  </div>
  )
}
