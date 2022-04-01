import styled from "styled-components"

export const NoContentContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 80px;
  }
  > div {
    font-family: "IBM Plex Sans KR", sans-serif;
  }
`

export default function NoContent() {
  return (
    <NoContentContainer>
      <img src="../images/icon_nocontent.png" alt="no_content"/>
      <div>공유할 기록이 없습니다</div>
    </NoContentContainer>
  )
}