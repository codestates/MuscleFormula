import styled from "styled-components";

export const NoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 70px;
  }
  > div {
  }
`;

export default function NoRecord() {
  return (
    <NoContentContainer>
      <img src="../images/icon_nocontent.png" alt="no_content" />
      <div>작성된 댓글이 없습니다!</div>
    </NoContentContainer>
  );
}
