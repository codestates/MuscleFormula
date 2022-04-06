/**포스트 상세 페이지**/
import Comment from "../components/Comment";
import { useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import PhotoModal from "../components/Modals/PhotoModal";
import type { RootState } from "../store";
import PhotoUploader from "../components/PhotoUploader";
import CalendarRecord from "../components/CalendarRecord";

import {
  axios_Get_DetailPosts,
  axios_Delete_Post,
  axios_Create_Comment,
  axios_Create_Like,
  axios_Delete_Like,
  axios_Put_Post,
} from "../axios";

const FormData = require("form-data");

interface RecordType {
  genre: string;
  weight: number;
  count: number;
  time_record: number;
}

export const Main = styled.div`
  border: 3px solid green;
  padding: 10px;
  margin: 5rem 0rem;
  /* 화면 중앙으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  width: 70%;
  flex-direction: column;
  > div {
    display: flex;
    width: 100%;
  }
  > #detail-container-up {
    border: 1px solid gray;

    display: flex;
    flex: 2 0 auto;
    flex-direction: column;
    > #detail-container-up-up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  > #detail-container-down {
    border: 1px solid gray;

    flex: 1 0 auto;
  }
  > #detail-container-comment {
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    /* width: auto; */
    flex: 2 0 auto;
    > #detail-Comment-input {
      display: flex;
      /* > #div-input {
        border: 3px solid lightgreen;
        width: 50%;
      } */
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
    //
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
        });
    });
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
                ></input>
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
                <div>
                  총 소요시간:{" "}
                  <input
                    type="textarea"
                    value={totalTime}
                    onChange={(e) => setTotalTime(e.target.value)}
                  ></input>
                </div>
                <div>
                  난이도 :{" "}
                  <input
                    type="textarea"
                    value={difficult}
                    onChange={(e) => setDifficult(e.target.value)}
                  ></input>
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
              <div id="detail-title">{postInfo.title}</div>
              <div id="detail-container-up-up">
                <div id="detail-userinfo">
                  <img
                    src={postInfo.users.image}
                    style={{ width: "70px" }}
                  ></img>
                  <div>{postInfo.users.nickname}</div>
                </div>
                <div id="detail-butten">
                  {postInfo.users.id === user.id ? (
                    <div>
                      <button
                        onClick={() => {
                          setIsModify(!isModify);
                          setTitleContent(postInfo.title);
                          setTextContent(postInfo.info);
                          setBodyPart(postInfo.body_part);
                          // setPhoto(postInfo.users.image);
                          setDifficult(postInfo.difficult);
                          setTotalTime(postInfo.total_time);
                          setExInfo(postInfo.exerciseInfo.id);
                        }}
                      >
                        수정
                      </button>
                      <button onClick={handlePostDelete}>삭제</button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>

              <div id="detail-image">
                <div>{postInfo.created_At.split("T")[0]}</div>
                <img src={postInfo.image} style={{ width: "200px" }}></img>
              </div>
            </div>
            <div id="detail-container-down">
              <div id="detail-exInfo">
                {postInfo.exerciseInfo.ex_record[0].genre}
                {/* {postInfo.exerciseInfo !== null ? (
                  postInfo.exerciseInfo.map(
                    (record: RecordType, idx: number) => (
                      <CalendarRecord key={idx} record={record} />
                    )
                  )
                ) : (
                  <div></div>
                )} */}
                <br />
                <br />
                <div>총 소요시간: {postInfo.total_time}</div>
                <div>난이도 : {postInfo.difficult}</div>
                <div>운동부위 : {postInfo.body_part}</div>
                <div> 소감 :{postInfo.info}</div>
              </div>
            </div>
            <div id="detail-container-comment">
              {isLike ? (
                <button onClick={handleLikeSubmit} style={{ width: "50px" }}>
                  ❤️
                </button>
              ) : (
                <button onClick={handleLikeSubmit} style={{ width: "50px" }}>
                  🖤
                </button>
              )}

              <div id="detail-Comment-input">
                글쓰기
                <input
                  id="input-test"
                  type="textarea"
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                ></input>
                <button id="comment-submit-btn" onClick={handleCommentSubmit}>
                  전송
                </button>
              </div>

              <ul>
                {postInfo.total_comment.length > 0 ? (
                  postInfo.total_comment.map((el: any, idx: any) => (
                    <li key={idx}>
                      <Comment
                        commentInfo={el}
                        postId={postId}
                        setPostInfo={setPostInfo}
                      ></Comment>
                    </li>
                  ))
                ) : (
                  <div>없음</div>
                )}
              </ul>
            </div>
          </Main>
        )
      ) : (
        <div>없</div>
      )}
    </div>
  );
}
