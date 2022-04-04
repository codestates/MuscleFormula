/**포스트 상세 페이지**/

import Comment from "../components/Comment";
import { useSelector } from "react-redux";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import type { RootState } from "../store";

import {
  axios_Get_DetailPosts,
  axios_Create_Comment,
  axios_Create_Like,
  axios_Delete_Like,
} from "../axios";

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
  > #detial-container-up {
    border: 1px solid gray;

    display: flex;
    flex: 2 0 auto;
    flex-direction: column;
    > #detial-container-up-up {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  > #detial-container-down {
    border: 1px solid gray;

    flex: 1 0 auto;
  }
  > #detial-container-comment {
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
  let { postId } = useParams();
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }
  console.log("detail Page");
  console.log("params postId:", postId);

  const [commentContent, setCommentContent] = useState<string | null | any>("");
  const [postInfo, setPostInfo] = useState<any>(null);
  const [like, setLike] = useState<any>("");
  let [isModify, setIsModify] = useState(false);
  const [titleContent, setTitleContent] = useState<string | null>("");
  const [textContent, setTextContent] = useState<string | null>("");
  const [bodyPart, setBodyPart] = useState<string | null>("");
  const [photo, setPhoto] = useState<any>({
    file: [],
    previewURL: "",
  });
  const [difficult, setDifficult] = useState(0);
  useEffect(() => {
    console.log("detail useEffect");
    console.log("innerPostId : ", postId);
    if (postId) {
      axios_Get_DetailPosts(postId).then((req) => {
        console.log("req:", req.data);
        setPostInfo(req.data);
        // return <div>여기 리턴</div>;
      });
    }
  }, []);
  const handleCommentSubmit = () => {
    console.log("버튼 작동?");
    console.log(" user.accessToen:", user.accessToken);
    console.log(" commentContent:", commentContent);
    axios_Create_Comment(postId, commentContent, user.accessToken).then(
      (res) => {
        console.log("코멘트 만들어짐");
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
      })
      .catch((err) => {
        console.log("err  :", err);
        // delete 안됨
        axios_Delete_Like(postId, user.accessToken);
        console.log("하트 삭제됨");
        setLike("삭제");
      });
  };

  const handlePostDelete = () => {
    console.log("포스트삭제");
  };

  // console.log("postInfo:", postInfo);
  // console.log("commentContent:", commentContent);
  console.log("isModify: ", isModify);
  return (
    <div id="DetailPage">
      {postInfo ? (
        isModify ? (
          <Main>
            <div id="detial-container-up">
              <div>수정</div>
              <div id="detail-title">
                <input></input>
              </div>
              <div id="detial-container-up-up">
                <div id="detail-userinfo">
                  <img
                    src={postInfo.users.image}
                    style={{ width: "70px" }}
                  ></img>
                  <div>{postInfo.users.nickname}</div>
                </div>
                <div id="detail-butten">
                  <button
                    onClick={() => {
                      setIsModify(!isModify);
                    }}
                  >
                    수정완료
                  </button>
                </div>
              </div>

              <div id="detail-image">
                <div>{postInfo.created_At.split("T")[0]}</div>
                <img src={postInfo.image} style={{ width: "200px" }}></img>
              </div>
            </div>
            <div id="detial-container-down">
              <div id="detail-exInfo">
                팔굽 윈몸 난이도
                <br />
                <br />
                <div>총 소요시간: {postInfo.total_time}</div>
                <div>난이도 : {postInfo.difficult}</div>
                <div>운동부위 : {postInfo.body_Part}</div>
                <div> 소감 :{postInfo.info}</div>
              </div>
            </div>
            <div id="detial-container-comment"></div>
          </Main>
        ) : (
          <Main>
            <div id="detial-container-up">
              <div>완료</div>
              <div id="detail-title">{postInfo.title}</div>
              <div id="detial-container-up-up">
                <div id="detail-userinfo">
                  <img
                    src={postInfo.users.image}
                    style={{ width: "70px" }}
                  ></img>
                  <div>{postInfo.users.nickname}</div>
                </div>
                <div id="detail-butten">
                  <button
                    onClick={() => {
                      setIsModify(!isModify);
                    }}
                  >
                    수정
                  </button>
                  <button onClick={handlePostDelete}>삭제</button>
                </div>
              </div>

              <div id="detail-image">
                <div>{postInfo.created_At.split("T")[0]}</div>
                <img src={postInfo.image} style={{ width: "200px" }}></img>
              </div>
            </div>
            <div id="detial-container-down">
              <div id="detail-exInfo">
                팔굽 윈몸 난이도
                <br />
                <br />
                <div>총 소요시간: {postInfo.total_time}</div>
                <div>난이도 : {postInfo.difficult}</div>
                <div>운동부위 : {postInfo.body_Part}</div>
                <div> 소감 :{postInfo.info}</div>
              </div>
            </div>
            <div id="detial-container-comment">
              <button onClick={handleLikeSubmit} style={{ width: "50px" }}>
                ❤️
              </button>

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
