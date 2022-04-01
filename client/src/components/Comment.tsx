/**포스트 댓글**/
import styled from "styled-components";

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

function Comment() {
  return (
    <Body>
      <div id="comment-info">
        <div id="user-info">
          <div>
            <img
              src="data:image/png;base64,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"
              style={{ width: "40px" }}
            ></img>
          </div>
          <div>유저 닉네임</div>
        </div>
        <div id="comment-content">뭐라는거임</div>
      </div>

      <div id="buttent-box">
        <button id="edit-btn">수정</button>
        <button id="delete-btn">삭제</button>
      </div>
    </Body>
  );
}

export default Comment;
