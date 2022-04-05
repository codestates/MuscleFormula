/**포스트 댓글**/
import { useSelector } from "react-redux";
import type { RootState } from "../store";

import {
  axios_Put_comment,
  axios_Delete_comment,
  axios_Get_DetailPosts,
} from "../axios";
import styled from "styled-components";
import React, { useState } from "react";
interface PostCommentProps {
  commentInfo: {
    comment: string;
    id: number;
    users: { id: number; email: string; image: string; nickname: string };
  };
  postId: number | string | undefined;
  // handleCommentDelete: any;
  setPostInfo: any;
}

export const Body = styled.div`
  border: 1px solid gray;

  display: flex;
  justify-content: space-between;
  align-items: center;
  > #comment-info {
    display: flex;
    flex: 1 0 auto;
    > #user-info {
    }
  }
  > .comment-right {
    display: flex;
    flex: 7 0 auto;
    justify-content: space-between;

    > #comment-content {
      /* text-align: center; */
      /* margin-left: 30px; */
      display: flex;
      align-items: center;
    }

    > #buttent-box {
      display: flex;
      /* align-items: center; */
      height: 30px;
      > #edit-btn {
      }
      > #delete-btn {
        margin-left: 10px;
      }
    }
  }
`;

const Comment: React.FC<PostCommentProps> = ({
  commentInfo,
  postId,
  setPostInfo,
}) => {
  let [isModify, setIsModify] = useState(false);
  let [modifyComment, setModifyComment] = useState(commentInfo.comment);
  // console.log("modifyComment :", modifyComment);
  // console.log("commentInfo :", commentInfo);
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }

  const handleCommentDelete = () => {
    axios_Delete_comment(commentInfo.id, user.accessToken).then(() => {
      // window.location.replace(`/detail/${postId}`); // 새로고침후 이동
      axios_Get_DetailPosts(postId).then((req) => {
        console.log("req:", req.data);
        setPostInfo(req.data);
        // return <div>여기 리턴</div>;
      });
    });
  };

  const handleCommentModify = () => {
    console.log("handleCommentModify 작동?");
    axios_Put_comment(commentInfo.id, modifyComment, user.accessToken).then(
      (response) => {
        axios_Get_DetailPosts(postId).then((req) => {
          console.log("req:", req.data);
          setPostInfo(req.data);
          // return <div>여기 리턴</div>;
        });
      }
    );
    setIsModify(!isModify);
  };

  return (
    <div>
      <Body>
        <div id="comment-info">
          <div id="user-info">
            <div>
              <img
                src={commentInfo.users.image}
                style={{ width: "40px" }}
              ></img>
            </div>
            <div>{commentInfo.users.nickname}</div>
          </div>
        </div>
        {isModify ? (
          <div className="comment-right">
            <div id="comment-content">
              <input
                type="textarea"
                value={modifyComment}
                onChange={(e) => {
                  setModifyComment(e.target.value);
                }}
              ></input>
            </div>

            <div id="buttent-box">
              <button id="edit-btn" onClick={handleCommentModify}>
                수정완료
              </button>
            </div>
          </div>
        ) : (
          <div className="comment-right">
            <div id="comment-content">{commentInfo.comment}</div>

            <div id="buttent-box">
              <button
                id="edit-btn"
                onClick={() => {
                  setIsModify(!isModify);
                }}
              >
                수정
              </button>
              <button id="delete-btn" onClick={handleCommentDelete}>
                삭제
              </button>
            </div>
          </div>
        )}
      </Body>
    </div>
  );
};

export default Comment;
