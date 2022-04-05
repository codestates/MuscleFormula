import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export const NeedLoginContainer=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 70px;
    margin-bottom: 1rem;
  }
  > div {
    text-align: center;
    > strong {
      color: #00cc99;
      cursor: pointer;
    }
  }
`

export default function NeedLogin() {
  const navigate = useNavigate();
  return (
    <NeedLoginContainer>
      <img src="../images/icon_bicycle.png" alt="no_content"/>
      <div><strong onClick={()=>navigate("/login")}>로그인</strong>이 필요합니다</div>
    </NeedLoginContainer>
  )
}