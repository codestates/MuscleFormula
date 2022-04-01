import styled from "styled-components"

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > img{
    width: 50px;
  } 
  > div {
    font-size: small;
    font-family: "IBM Plex Sans KR", sans-serif;
  }
`
export default function Loading() {
  return (
    <LoadingContainer>
      <img src="../images/icon-loading.gif" alt="loading"/>
      <div>loading...</div>
    </LoadingContainer>
  )
}