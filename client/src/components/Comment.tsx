/**포스트 댓글**/
import { useSelector } from "react-redux";
import type { RootState } from "../store";

import { axios_Delete_comment } from "../axios";
import styled from "styled-components";

interface PostCommentProps {
  commentInfo: {
    comment: string;
    id: number;
    users: { id: number; email: string; image: string; nickname: string };
  };
  postId: number | string | undefined;
}

export const Body = styled.div`
  border: 1px solid gray;

  display: flex;
  justify-content: space-between;
  align-items: center;
  > #comment-info {
    display: flex;
    > #user-info {
    }
    > #comment-content {
      /* text-align: center; */
      margin-left: 30px;
      display: flex;
      align-items: center;
    }
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
`;

const Comment: React.FC<PostCommentProps> = ({ commentInfo, postId }) => {
  console.log("commentInfo :", commentInfo);
  let user = useSelector((state: RootState) => state.userInfo.userInfo);
  const localUser = localStorage.getItem("userInfo");
  if (localUser !== null) {
    user = JSON.parse(localUser);
  }
  const handleCommentDelete = () => {
    axios_Delete_comment(commentInfo.id, user.accessToken).then(() => {
      window.location.replace(`/detail/${postId}`); // 새로고침후 이동
    });
  };
  return (
    <Body>
      <div id="comment-info">
        <div id="user-info">
          <div>
            <img src={commentInfo.users.image} style={{ width: "40px" }}></img>
          </div>
          <div>{commentInfo.users.nickname}</div>
        </div>
        <div id="comment-content">{commentInfo.comment}</div>
      </div>

      <div id="buttent-box">
        <button id="edit-btn">수정</button>
        <button id="delete-btn" onClick={handleCommentDelete}>
          삭제
        </button>
      </div>
    </Body>
  );
};

export default Comment;
