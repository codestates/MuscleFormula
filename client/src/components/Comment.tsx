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
  // border: 1px solid gray;
  padding: 0.5rem 0rem 0.5rem 0rem;
  border-bottom: 1px solid lightgrey;
  font-size: small;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > #comment-info {
    display: flex;
    overflow: hidden;
    > #user-info {
      padding: 0rem 0.2rem 0rem 0.2rem;
      display: flex;
      flex-direction: column;
      width: 5rem;
      font-size: small;
      font-weight: bold;
      align-items: center;
      > .user-image-container {
        position: relative;
        width: 2rem;
        height: 2rem;
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
      > .delete-button {
        > .fa-trash-can {
          font-size: 20px;
          padding: 0.5rem;
          cursor: pointer;
        }
        > .fa-trash-can:hover {
          color: red;
        }
      }

      > .edit-button {
        > .fa-pen-to-square {
          font-size: 20px;
          padding: 0.5rem;
          cursor: pointer;
        }
        > .fa-pen-to-square:hover {
          color: red;
        }
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
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }
  const handleCommentDelete = () => {
    axios_Delete_comment(commentInfo.id, user.accessToken).then(() => {
      // window.location.replace(`/detail/${postId}`); // 새로고침후 이동
      axios_Get_DetailPosts(postId).then((req) => {
        setPostInfo(req.data);
        // return <div>여기 리턴</div>;
      });
    });
  };

  const handleCommentModify = () => {
    axios_Put_comment(commentInfo.id, modifyComment, user.accessToken).then(
      (response) => {
        axios_Get_DetailPosts(postId).then((req) => {
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
            <div className="user-image-container">
            <img
              className="user-image"
              src={commentInfo.users.image}
              alt="user"
            />
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
            {commentInfo.users.id === user.id || user.nickname === "admin" ? (
              <div id="buttent-box">
                <div className="edit-button">
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => {
                      setIsModify(!isModify);
                    }}
                  />
                </div>
                <div className="delete-button">
                  <i
                    className="fa-solid fa-trash-can"
                    onClick={handleCommentDelete}
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </Body>
    </div>
  );
};

export default Comment;
