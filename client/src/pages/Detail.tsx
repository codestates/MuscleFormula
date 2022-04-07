/**포스트 상세 페이지**/
import Comment from "../components/Comment";
import { useSelector, useStore } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PhotoModal from "../components/Modals/PhotoModal";
import type { RootState } from "../store";
import PhotoUploader from "../components/PhotoUploader";
import CalendarRecord from "../components/CalendarRecord";
import DeleteModal from "../components/Modals/DeleteModal";
import labelStarPoint from "../functions/labelStarPoint";
import NoRecord from "../components/Nocomment";
import {
  axios_Get_DetailPosts,
  axios_Delete_Post,
  axios_Create_Comment,
  axios_Create_Like,
  axios_Delete_Like,
  axios_Put_Post,
} from "../axios";
import StarPoint from "../components/StarPoint";

const FormData = require("form-data");
function showTime(duration: number) {
  let seconds: number | string = Math.floor(duration % 60);
  let minutes: number | string = Math.floor((duration / 60) % 60);
  let hours: number | string = Math.floor((duration / (60 * 60)) % 24);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + "시간 " + minutes + "분 " + seconds + "초";
}
interface RecordType {
  genre: string;
  weight: number;
  count: number;
  time_record: number;
}

export const Main = styled.div`
  //border: 3px solid greens;

  margin: 12vh auto;
  /* margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto; */
  border-radius: 25px;
  border: 1px solid lightgrey;
  padding: 1rem;
  /* 화면 중앙으로 만들기 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  min-width: 22rem;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
  > [contenteditable] {
    outline: 0px solid transparent;
  }
  > div {
    display: flex;
    width: 100%;
  }
  > #detail-container-up {
    //border: 1px solid gray;
    display: flex;
    min-width: 20rem;
    flex-direction: column;

    > .detail-title {
      padding-top: 1rem;
      font-size: 1.5rem;
      border-bottom: 1px solid grey;
    }
    > #detail-image {
      > .post-date {
        padding-left: 1rem;
        padding-bottom: 1rem;
      }
      > .post-image {
        width: 100%;
      }
    }

    > #detail-container-up-up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 1rem;
      > #detail-userinfo {
        padding: 1rem;
        display: flex;
        > .user-image {
          border-radius: 4rem;
        }
        > .user-nickname {
          padding: 1rem;
        }
      }
      > .detail-button {
        display: flex;

        > .delete-button {
          > .fa-trash-can {
            margin-top: 1rem;
            font-size: 1.5rem;
            padding: 0.5rem;
            cursor: pointer;
          }
          > .fa-trash-can:hover {
            color: red;
          }
        }

        > .edit-button {
          > .fa-pen-to-square {
            margin-top: 1rem;
            font-size: 1.5rem;
            padding: 0.5rem;
            cursor: pointer;
          }
          > .fa-pen-to-square:hover {
            color: red;
          }
        }
      }
    }
  }
  > #detail-container-down {
    //border: 1px solid gray;
    min-width: 20rem;
    > .detail-exInfo {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > .user-exInfo {
        padding: 1rem;
      }
      > .exInfo {
        padding: 1rem;
        width: 100%;
      }
    }
  }
  > #detail-container-comment {
    // border: 1px solid gray;
    display: flex;
    flex-direction: column;
    min-width: 20rem;

    > .heart {
      > .before-like {
        > .fa-heart {
          color: grey;
          font-size: 1.3rem;
          padding: 0.5rem;
          cursor: pointer;
        }
      }
      > .after-like {
        > .fa-heart {
          color: red;
          font-size: 1.3rem;
          padding: 0.5rem;
          cursor: pointer;
        }
      }
    }
    > #detail-Comment-input {
      display: flex;
      /* > #div-input {
        border: 3px solid lightgreen;
        width: 50%;
      } */

      > button {
        width: 4rem;
        font-size: medium;
        cursor: pointer;
        background-color: black;
        color: white;
        border: none;
        padding: 0.3rem;
        border-radius: 2px;
        border-bottom: 1px solid lightgrey;
      }
      > .detail-text {
        border: 0px solid lightgrey;
        border-bottom: 1px solid lightgrey;
        font-size: medium;
        padding: 0.7rem;
        width: 92%;
        outline: none;
      }
      > .detail-text:empty:before {
        content: attr(placeholder);
        color: grey;
        display: block;
      }
    }
  }
`;
export default function Detail() {
  const navigate = useNavigate();
  let { postId } = useParams();
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }
  console.log("detail Page");
  console.log("params postId:", postId);

  const [postInfo, setPostInfo] = useState<any>(null);
  console.log("postInfo:", postInfo);
  const [commentContent, setCommentContent] = useState<string | null | any>("");
  const [like, setLike] = useState<any>("");
  let [isModify, setIsModify] = useState(false);
  const [titleContent, setTitleContent] = useState<any>("");
  const [textContent, setTextContent] = useState<any>("");
  const [bodyPart, setBodyPart] = useState<any>("");
  const [totalTime, setTotalTime] = useState<any>("");
  const [difficult, setDifficult] = useState<any>(0);
  const [photo, setPhoto] = useState<any>({
    file: [],
    previewURL: "",
  });
  const [exInfo, setExInfo] = useState("");
  const [photoModal, setPhotoModal] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const openPhotoModal = () => {
    setPhotoModal(!photoModal);
  };

  useEffect(() => {
    console.log("detail useEffect");
    console.log("innerPostId : ", postId);
    if (postId) {
      axios_Get_DetailPosts(postId).then((req) => {
        console.log("req:", req.data);
        setPostInfo(req.data);
        let likeFiler = req.data.total_Likes.filter((e: any) => {
          return e.users.id === user.id;
        });
        console.log("likeFiler 있음? :", likeFiler.length > 0);
        setIsLike(likeFiler.length > 0);
      });
    }
  }, []);
  const handleCommentSubmit = () => {
    axios_Create_Comment(postId, commentContent, user.accessToken).then(
      (res) => {
        setCommentContent("");
        axios_Get_DetailPosts(postId).then((req) => {
          console.log("req:", req.data);
          setPostInfo(req.data);
        });
      }
    );
  };
  const handleLikeSubmit = () => {
    console.log("하트 누름");
    axios_Create_Like(postId, user.accessToken)
      .then((res) => {
        setLike("생성");
        axios_Get_DetailPosts(postId).then((req) => {
          console.log("req:", req.data);
          setPostInfo(req.data);
          let likeFiler = req.data.total_Likes.filter((e: any) => {
            return e.users.id === user.id;
          });
          console.log("likeFiler 있음? :", likeFiler.length > 0);
          setIsLike(likeFiler.length > 0);
        });
      })
      .catch((err) => {
        console.log("err  :", err);
        axios_Delete_Like(postId, user.accessToken).then(() => {
          axios_Get_DetailPosts(postId).then((req) => {
            console.log("req:", req.data);
            setPostInfo(req.data);
            let likeFiler = req.data.total_Likes.filter((e: any) => {
              return e.users.id === user.id;
            });
            console.log("likeFiler 있음? :", likeFiler.length > 0);
            setIsLike(likeFiler.length > 0);
          });
        });
        console.log("하트 삭제됨");
        setLike("삭제");
      });
  };

  const handlePostModifySubmit = () => {
    const formData = new FormData();
    formData.append("postTitle", titleContent);
    formData.append("info", textContent);
    formData.append("exerciseInfo", exInfo);
    formData.append("totalTime", totalTime);
    formData.append("difficult", difficult);
    formData.append("bodyPart", "상체");
    formData.append("postImage", photo.file[0]);

    console.log("수정 완료 버튼 ");
    axios_Put_Post(formData, postInfo.id, user.accessToken).then(() => {
      axios_Get_DetailPosts(postId)
        .then((req) => {
          console.log("req:", req.data);
          setPostInfo(req.data);
        })
        .then(() => {
          setIsModify(!isModify);
          setShowDifficult(false);
        });
    });
  };
  const handleModifyPost = () => {
    setIsModify(!isModify);
    setTitleContent(postInfo.title);
    setTextContent(postInfo.info);
    setBodyPart(postInfo.body_part);
    // setPhoto(postInfo.users.image);
    setDifficult(postInfo.difficult);
    setTotalTime(postInfo.total_time);
    setExInfo(postInfo.exerciseInfo.id);
  };

  const [deleteModal, setDeleteModal] = useState(false);
  const openDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  const handlePostDelete = () => {
    console.log("포스트삭제");
    axios_Delete_Post(postId, user.accessToken).then(() => {
      navigate("/main");
      // window.location.replace("/main"); // 새로고침후 이동
    });
  };

  const handleGetbodyPart = (e: any) => {
    console.log("e.target.value:", e.target.value);
    setBodyPart(e.target.value);
  };

  const [showDifficult, setShowDifficult] = useState(false);
  // console.log("postInfo:", postInfo);
  // console.log("titleContent:", titleContent);
  // console.log("isModify: ", isModify);
  // let shareRecords = postInfo.exerciseInfo.ex_record;
  // console.log("shareRecords :", shareRecords);

  return (
    <div id="DetailPage">
      {postInfo ? (
        isModify ? (
          <Main>
            <div id="detail-container-up">
              <div>수정</div>
              <div id="detail-title">
                <input
                  type="textarea"
                  value={titleContent}
                  onChange={(e) => setTitleContent(e.target.value)}
                />
              </div>
              <div id="detail-container-up-up">
                <div id="detail-userinfo">
                  <img
                    src={postInfo.users.image}
                    style={{ width: "70px" }}
                    alt="user"
                  />
                  <div>{postInfo.users.nickname}</div>
                </div>
                <div id="detail-butten">
                  <button onClick={handlePostModifySubmit}>수정완료</button>
                </div>
              </div>

              <div id="detail-image">
                <div>{postInfo.created_At.split("T")[0]}</div>
                <PhotoUploader
                  photo={photo}
                  setPhoto={setPhoto}
                  photoUrl={postInfo.image}
                />
                {/* <img
                  src={postInfo.image}
                  alt="post_image"
                  style={{ width: "200px" }}
                  onClick={openPhotoModal}
                />
                {photoModal ? (
                  <PhotoModal
                    photo={photo}
                    setPhoto={setPhoto}
                    setPhotoModal={setPhotoModal}
                  />
                ) : null} */}
              </div>
            </div>
            <div id="detail-container-down">
              <div id="detail-exInfo">
                <br />
                <br />
                <div>총 소요시간: {showTime(postInfo.total_time)} </div>
                <div onClick={() => setShowDifficult(true)}>
                  난이도 :{" "}
                  {!showDifficult ? (
                    labelStarPoint(difficult)
                  ) : (
                    <StarPoint setDifficult={setDifficult} />
                  )}
                </div>
                <div>
                  운동부위 :
                  {/* <input
                    type="textarea"
                    value={bodyPart}
                    onChange={(e) => setBodyPart(e.target.value)}
                  ></input> */}
                  <select id="dropdown" onChange={handleGetbodyPart}>
                    <option value={bodyPart}>{bodyPart}</option>
                    <option value="전신">전신</option>
                    <option value="상체">상체</option>
                    <option value="하체">하체</option>
                  </select>
                </div>
                <div>
                  {" "}
                  소감 :
                  <input
                    type="textarea"
                    value={textContent}
                    onChange={(e) => setTextContent(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div id="detail-container-comment"></div>
          </Main>
        ) : (
          <Main>
            <div id="detail-container-up">
              <div className="detail-title">{postInfo.title}</div>
              <div id="detail-container-up-up">
                <div id="detail-userinfo">
                  <img
                    className="user-image"
                    src={postInfo.users.image}
                    style={{ width: "50px" }}
                    alt="user"
                  />
                  <div className="user-nickname">{postInfo.users.nickname}</div>
                </div>
                {postInfo.users.id === user.id ? (
                  <div className="detail-button">
                    <div className="edit-button">
                      <i
                        className="fa-solid fa-pen-to-square"
                        onClick={handleModifyPost}
                      />
                    </div>
                    <div className="delete-button">
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={openDeleteModal}
                      />
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <div id="detail-image">
                <div className="post-date">
                  {postInfo.created_At.split("T")[0]}
                </div>
                <img className="post-image" src={postInfo.image}></img>
              </div>
            </div>
            <div id="detail-container-down">
              <div className="detail-exInfo">
                {console.log("what doyou have?", postInfo)}
                <div className="user-exInfo">
                  {postInfo !== null
                    ? postInfo.exerciseInfo.ex_record.map(
                        (record: RecordType, idx: number) => (
                          <CalendarRecord key={idx} record={record} />
                        )
                      )
                    : null}
                </div>
                <div className="exInfo">
                  <div>총 소요시간: {showTime(postInfo.total_time)} </div>
                  <div>난이도: {labelStarPoint(postInfo.difficult)}</div>
                  <div>운동부위 : {postInfo.body_part}</div>
                  <div> 소감 :{postInfo.info}</div>
                </div>
              </div>
            </div>
            <div id="detail-container-comment">
              <div className="heart">
                {isLike ? (
                  <div className="after-like">
                    <i
                      className="fa-solid fa-heart"
                      onClick={handleLikeSubmit}
                      style={{ width: "50px" }}
                    />
                  </div>
                ) : (
                  <div className="before-like">
                    <i
                      className="fa-solid fa-heart"
                      onClick={handleLikeSubmit}
                      style={{ width: "50px" }}
                    />
                  </div>
                )}
              </div>
              <div id="detail-Comment-input">
                {/* <div
                  className="detail-text"
                  contentEditable="true"
                  placeholder="댓글 달기..."
                  onInput={(e) =>
                    setCommentContent(e.currentTarget.textContent)
                  }
                ></div> */}
                <input
                  className="detail-text"
                  value={commentContent}
                  placeholder="댓글 달기..."
                  onChange={(e) => {
                    setCommentContent(e.target.value);
                  }}
                  // onKeyPress={}
                ></input>
                <button id="comment-submit-btn" onClick={handleCommentSubmit}>
                  게시
                </button>
              </div>
              <div className="comment-list">
                {postInfo.total_comment.length > 0 ? (
                  postInfo.total_comment.map((el: any, idx: any) => (
                    <div key={idx}>
                      <Comment
                        commentInfo={el}
                        postId={postId}
                        setPostInfo={setPostInfo}
                      ></Comment>
                    </div>
                  ))
                ) : (
                  <NoRecord />
                )}
              </div>
            </div>
            {deleteModal ? (
              <DeleteModal
                setDeleteModal={setDeleteModal}
                handlePostDelete={handlePostDelete}
              />
            ) : null}
          </Main>
        )
      ) : (
        <div>없음</div>
      )}
    </div>
  );
}
