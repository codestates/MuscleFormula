/**포스트 상세 페이지**/
import swal from "sweetalert";
import Comment from "../components/Comment";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
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
  if (hours === "00" && minutes === "00") {
    return seconds + "초";
  } else if (hours === "00") {
    return minutes + "분 " + seconds + "초";
  } else {
    return hours + "시간 " + minutes + "분 " + seconds + "초";
  }
}
interface RecordType {
  genre: string;
  weight: number;
  count: number;
  time_record: number;
}

export const Main = styled.div`
  margin: 12vh auto;
  border-radius: 25px;
  border: 1px solid lightgrey;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 30rem;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
  > [contenteditable] {
    outline: 0px solid transparent;
  }
  > div {
    display: flex;
    width: 100%;
  }
  > .detail-container-up {
    display: flex;
    min-width: 20rem;
    flex-direction: column;

    > .detail-title {
      padding-top: 1rem;
      padding-bottom: 0.5rem;
      font-size: x-large;
      border-bottom: 1px solid grey;
      margin-bottom: 0.5rem;
      > .edit-title {
        border: none;
        border-radius: 4px;
        padding-top: 1rem;
        padding-bottom: 0.5rem;
        font-size: x-large;
        width: 100%; 
        height: 30px;
        &:focus {
          outline: 2px solid grey;
        }
      }
    }
    > .detail-button {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      > .edit-success {
        margin-top: 1rem;
        width: 63px;
        height: 2rem;
        font-size: small;
        border-radius: 5px;
        border: 0px;
        background-color: grey;
        color: white;
        cursor: pointer;
      }
      > .delete-button {
        > .fa-trash-can {
          margin-top: 1rem;
          font-size: 1.5rem;
          padding: 0rem 0.5rem;
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
          padding: 0rem 0.5rem;
          cursor: pointer;
        }
        > .fa-pen-to-square:hover {
          color: red;
        }
      }
    }
    > .detail-image {
      height: 100%;
      > .post-date {
        padding-left: 1rem;
        padding-bottom: 1rem;
        color: grey;
        font-size: small;
      }
      > .post-image {
        width: 100%;
      }
    }

    > .detail-container-up-up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      > .detail-userinfo {
        display: flex;
        align-items: center;
        padding-left: 0.5rem;
        > .user-image-wrapper {
          position: relative;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          overflow: hidden;
          background-color: white;
          > .user-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        > .user-nickname {
          padding: 1rem;
          font-weight: bold;
        }
      }
      
      }
    }
  
  > .detail-container-down {
    min-width: 20rem;
    > .detail-exInfo {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > .user-exInfo-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        > .user-exInfo {
          padding: 1rem;
        }
      }
      > .exInfo {
        padding: 0.5rem;
        width: 100%;
        > .exInfo-time-wrapper {
          padding-left: 0.5rem;
          display: flex;
          flex-direction: row;
          > .exInfo-time-title {
            width: 6rem;
            font-weight: bold;
          }
          > .exInfo-time {
            width: 10rem;
          }
        }
        > .exInfo-difficult-container {
          padding-left: 0.5rem;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          > .exInfo-difficult-title {
            width: 6rem;
            font-weight: bold;
          }
          > .exInfo-difficult {
            width: 10rem;
          }
        }
        > .exInfo-bodypart-container {
          padding-left: 0.5rem;
          margin-bottom: 0.5rem;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          > .exInfo-bodypart-title {
            width: 6rem;
            font-weight: bold;
          }
          > .exInfo-bodypart {
            width: 10rem;
            > select {
              margin-left: -5px;
              width: 7.6rem;
              font-size: medium;
              border: none;
              color: black;
            }
            > select:focus {
              outline: none;
            }
          }
        }
        > .exInfo-text {
          margin-top: 2rem;
          padding: 0.5rem;
          background: #f2f2f2;
          border-radius: 10px;
        }
        > .post-info {
          padding: 5px;
          > .edit-text {
            border: 1px solid #ddd;
            border-radius: 5px;
            margin: 3px 0;
            font-size: 16px;
            width: 100%;
            height: 160px;
            resize: none;
            &:focus {
              outline: 2px solid grey;
            }
          }
        }
      }
    }
  }
  > .detail-container-comment {
    // border: 1px solid gray;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    > .heart {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      font-size: small;
      > .before-like {
        width:1.6rem;
        margin-left: 0.5rem;
        > .fa-heart {
          color: grey;
          font-size: 1.3rem;
          cursor: pointer;
        }
      }
      > .after-like {
        width:1.6rem;
        margin-left: 0.5rem;
        > .fa-heart {
          color: red;
          font-size: 1.3rem;
          cursor: pointer;
        }
      }
    }
    > .detail-Comment-input {
      display: flex;
      margin-top: 1rem;
      height: 2rem;
      /* > .div-input {
        border: 3px solid lightgreen;
        width: 50%;
      } */

      > button {
        height: 2rem;
        width: 3rem;
        font-size: small;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: grey;
        color: white;
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

  const [postInfo, setPostInfo] = useState<any>(null);
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
    if (postId) {
      axios_Get_DetailPosts(postId).then((req) => {
        setPostInfo(req.data);
        let likeFiler = req.data.total_Likes.filter((e: any) => {
          return e.users.id === user.id;
        });
        setIsLike(likeFiler.length > 0);
      });
    }
  }, []);
  const handleCommentSubmit = () => {
    if (commentContent.length < 2) {
      return swal("댓글을 2글자이상 입력하세요");
    } else {
      axios_Create_Comment(postId, commentContent, user.accessToken).then(
        (res) => {
          setCommentContent("");
          axios_Get_DetailPosts(postId).then((req) => {
            setPostInfo(req.data);
          });
        }
      );
    }
  };
  const handleLikeSubmit = () => {
    axios_Create_Like(postId, user.accessToken)
      .then((res) => {
        setLike("생성");
        axios_Get_DetailPosts(postId).then((req) => {
          setPostInfo(req.data);
          let likeFiler = req.data.total_Likes.filter((e: any) => {
            return e.users.id === user.id;
          });
          setIsLike(likeFiler.length > 0);
        });
      })
      .catch((err) => {
        axios_Delete_Like(postId, user.accessToken).then(() => {
          axios_Get_DetailPosts(postId).then((req) => {
            setPostInfo(req.data);
            let likeFiler = req.data.total_Likes.filter((e: any) => {
              return e.users.id === user.id;
            });
            setIsLike(likeFiler.length > 0);
          });
        });
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
    formData.append("bodyPart", bodyPart);
    formData.append("postImage", photo.file[0]);

    axios_Put_Post(formData, postInfo.id, user.accessToken).then(() => {
      axios_Get_DetailPosts(postId)
        .then((req) => {
          setPostInfo(req.data);
        })
        .then(() => {
          setIsModify(!isModify);
          setShowDifficult(false);
          swal("수정완료 되었습니다");
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
    axios_Delete_Post(postId, user.accessToken).then(() => {
      navigate("/main");
      // window.location.replace("/main"); // 새로고침후 이동s
    });
  };

  const handleGetbodyPart = (e: any) => {
    setBodyPart(e.target.value);
  };

  const [showDifficult, setShowDifficult] = useState(false);

  const handlePressEnter = (e: { key: string }) => {
    if (e.key === "Enter") {
      handleCommentSubmit();
    }
  };

  return (
    <div className="DetailPage">
      {postInfo ? (
        isModify ? (
          <Main>
            <div className="detail-container-up">
              <div className="detail-title">
                <input
                  className="edit-title"
                  value={titleContent}
                  onChange={(e) => setTitleContent(e.target.value)}
                ></input>
              </div>
              <div className="detail-button">
                  <button
                    className="edit-success"
                    onClick={handlePostModifySubmit}
                  >
                    수정 완료
                  </button>
                </div>
              <div className="detail-container-up-up">
                <div className="detail-userinfo">
                <div className="user-image-wrapper">
                  <img
                    className="user-image"
                    src={postInfo.users.image}
                    alt="user"
                  />
                  </div>
                  <div className="user-nickname">{postInfo.users.nickname}</div>
                </div>
                
                {/* onClick={handlePostModifySubmit} */}
              </div>
              <div className="detail-image">
                <div className="post-date">
                  {postInfo.created_At.split("T")[0]}
                </div>
              <div className="post-image">
              <PhotoUploader
                  photo={photo}
                  setPhoto={setPhoto}
                  photoUrl={postInfo.image}
                />
              </div>
              </div>
            </div>
            <div className="detail-container-down">
              <div className="detail-exInfo">
              <div className="user-exInfo-wrapper">
                  <div className="user-exInfo">
                  {postInfo !== null
                    ? postInfo.exerciseInfo.ex_record.map(
                        (record: RecordType, idx: number) => (
                          <CalendarRecord key={idx} record={record} />
                        )
                      )
                    : null}
                  </div>
                </div>
                <div className="exInfo">
                  <div className="exInfo-time-wrapper">
                    <div className="exInfo-time-title">소요시간</div>
                    <div className="exInfo-time">
                      {showTime(postInfo.total_time)}{" "}
                    </div>
                  </div>
                  <div
                    className="exInfo-difficult-container"
                    onClick={() => setShowDifficult(true)}
                  >
                    <div className="exInfo-difficult-title">난이도</div>
                    {!showDifficult ? (
                      labelStarPoint(difficult)
                    ) : (
                      <div className="exInfo-difficult">
                        <StarPoint setDifficult={setDifficult} />
                      </div>
                    )}
                  </div>

                  <div className="exInfo-bodypart-container">
                    <div className="exInfo-bodypart-title">운동부위</div>
                    <div className="exInfo-bodypart">
                      <select className="dropdown" onChange={handleGetbodyPart}>
                        <option value={bodyPart}>{bodyPart}</option>
                        <option value="전신">전신</option>
                        <option value="상체">상체</option>
                        <option value="하체">하체</option>
                      </select>
                    </div>
                  </div>
                  <div className="post-info">
                    {" "}
                    <textarea
                      className="edit-text"
                      value={textContent}
                      onChange={(e) => setTextContent(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="detail-container-comment"></div>
          </Main>
        ) : (
          <Main>
            <div className="detail-container-up">
              <div className="detail-title">{postInfo.title}</div>
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
              <div className="detail-container-up-up">
                <div className="detail-userinfo">
                  <div className="user-image-wrapper">
                  <img
                    className="user-image"
                    src={postInfo.users.image}
                    alt="user"
                  />
                  </div>
                  <div className="user-nickname">{postInfo.users.nickname}</div>
                </div>
                
              </div>

              <div className="detail-image">
                <div className="post-date">
                  {postInfo.created_At.split("T")[0]}
                </div>
                <img className="post-image" src={postInfo.image} alt="post"/>
              </div>
            </div>
            <div className="detail-container-down">
              <div className="detail-exInfo">
                <div className="user-exInfo-wrapper">
                  <div className="user-exInfo">
                  {postInfo !== null
                    ? postInfo.exerciseInfo.ex_record.map(
                        (record: RecordType, idx: number) => (
                          <CalendarRecord key={idx} record={record} />
                        )
                      )
                    : null}
                  </div>
                </div>
                <div className="exInfo">
                  <div className="exInfo-time-wrapper">
                    <div className="exInfo-time-title">소요시간</div>
                    <div className="exInfo-time">
                      {showTime(postInfo.total_time)}{" "}
                    </div>
                  </div>
                  <div className="exInfo-difficult-container">
                    <div className="exInfo-difficult-title">난이도</div>
                    <div className="exInfo-difficult">
                      {labelStarPoint(postInfo.difficult)}
                    </div>
                  </div>
                  {/* 
                  <div>총 소요시간: {showTime(postInfo.total_time)} </div>
                  <div>난이도: {labelStarPoint(postInfo.difficult)}</div> */}
                  <div className="exInfo-bodypart-container">
                    <div className="exInfo-bodypart-title">운동부위</div>
                    <div className="exInfo-bodypart">{postInfo.body_part}</div>
                  </div>
                  <div className="exInfo-text">{postInfo.info}</div>
                </div>
              </div>
            </div>
            <div className="detail-container-comment">
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
                좋아요 {postInfo.total_Likes.length}개
              </div>
              <div className="detail-Comment-input">
                <input
                  className="detail-text"
                  value={commentContent}
                  placeholder="댓글 달기..."
                  onChange={(e) => {
                    setCommentContent(e.target.value);
                  }}
                  onKeyPress={handlePressEnter}
                ></input>
                <button
                  className="comment-submit-btn"
                  onClick={handleCommentSubmit}
                >
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
