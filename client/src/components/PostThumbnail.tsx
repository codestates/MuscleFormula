/**메인 화면에 뜨는 포스트 썸네일**/
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { POST_ID } from "../reducer/postReducer";

export const Postthumb = styled.div`
  flex: none;
  width: 80vw;
  max-width: 270px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  box-shadow: 2px 3px 10px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  &:hover {
    opacity: 0.6;
  }
  > #image-container {
    height: 120px;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
  > #up-container {
    padding: 1rem;
    height: 110px;
    > .post-title {
      font-size: large;
      font-weight: bold;
      margin-bottom: 0.3rem;
      max-height: 1.3em;
      overflow: hidden;
    }
    > .post-content {
      margin-bottom: 0.7rem;
      font-size: small;
      max-height: 1.3em;
      overflow: hidden;
    }
    > .post-social {
      font-size: small;
      > .post-date {
        color: grey;
        margin-right: 0.5rem;
      }
      > .post-likes {
        margin-right: 0.5rem;
      }
      > .post-comments {
      }
    }
  }
  > #down-container {
    padding: 0rem 1rem 1rem 1rem;
    display: flex;
    height: 100px;
    justify-content: space-between;
    > #profile-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 3.6rem;
      > #profile-photo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        > #photo-container {
          position: relative;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          overflow: hidden;
          > img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      > .user-nickname {
        padding-top: 0.3rem;
        font-size: small;
        overflow: hidden;
        max-height: 3em;
      }
    }
    > #exercise-container {
      text-align: left;
      border-collapse: collapse;
      margin-left: 0.5rem;
      font-size: small;
      > tbody > tr:not(:last-of-type) {
        text-align: left;
        border-bottom: 1px solid lightgrey;
      }
      > tbody > th,
      td {
        padding-left: 0.5rem;
      }
    }
  }
`;

interface PostThumbnailProps {
  postThumb: {
    postId: number;
    postImage: string;
    postTitle: string;
    info: string;
    total_Likes: any[];
    total_comments: any[];
    user: { userId: number; nickname: string; image: string };
    difficult: number;
    totalTime: number;
    bodyPart: string;
    created_At: string;
  };
}

const PostThumbnail: React.FC<PostThumbnailProps> = ({ postThumb }) => {
  const dispatch: AppDispatch = useDispatch();

  console.log("postThumb :", postThumb);
  console.log("postThumb.postId :", postThumb.postId);
  const navigate = useNavigate();
  const numToStar = (num: number) => {
    if (num === 1) return "★";
    if (num === 2) return "★★";
    if (num === 3) return "★★★";
    if (num === 4) return "★★★★";
    if (num === 5) return "★★★★★";
    else return "☆";
  };

  const secToTime = (duration: number) => {
    let seconds: number | string = Math.floor(duration % 60);
    let minutes: number | string = Math.floor((duration / 60) % 60);
    let hours: number | string = Math.floor((duration / (60 * 60)) % 24);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + "시간 " + minutes + "분 " + seconds + "초";
  };
  // let postId = postThumb.postId
  return (
    <Postthumb
      onClick={() => {
        dispatch(POST_ID(postThumb.postId));
        navigate("/detail");
      }}
    >
      <div id="image-container">
        <img src={postThumb.postImage} alt="post_image" />
      </div>
      <div id="up-container">
        <div className="post-title">{postThumb.postTitle}</div>
        <div className="post-content">{postThumb.info}</div>
        <div className="post-social">
          <span className="post-date">{postThumb.created_At.slice(0, 10)}</span>
          <span className="post-likes">
            <i className="fa-regular fa-heart"></i>
            {postThumb.total_Likes}
          </span>
          <span className="post-comments">
            <i className="fa-regular fa-comment-dots"></i>
            {postThumb.total_comments}
          </span>
        </div>
      </div>
      <div id="down-container">
        <div id="profile-container">
          <div id="profile-photo-container">
            <div id="photo-container">
              <img
                className="user-photo"
                src={postThumb.user.image}
                alt="profile_image"
              />
            </div>
          </div>
          <strong className="user-nickname">{postThumb.user.nickname}</strong>
        </div>
        <table id="exercise-container">
          <tbody>
            <tr>
              <th>난이도</th>
              <td>{numToStar(postThumb.difficult)}</td>
            </tr>
            <tr>
              <th>소요시간</th>
              <td>{secToTime(postThumb.totalTime)}</td>
            </tr>
            <tr>
              <th>운동부위</th>
              <td>{postThumb.bodyPart}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Postthumb>
  );
};
export default PostThumbnail;
