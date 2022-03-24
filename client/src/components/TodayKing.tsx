/**오늘의 운동왕**/
import styled from "styled-components"

export const TodayKingContainer = styled.ol`
  position : relative;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 1rem;
  width: 80vw;
  max-width: 350px;
  list-style-type: none;
  border-radius: 50px;
  background-color: #f2f2f2;
  > li {
    display: flex;
    flex-direction: column;
    > img {
      width: 45px;
    }
  }
`
export default function TodayKing() {
  return (
    <TodayKingContainer>
        <li>
          <img src="../images/icon_goldmedal.png" alt= "goldmedal"/>
          <strong>
            닉네임1
          </strong>
          <data>
            운동기록1
          </data>
        </li>
        <li>
          <img src="../images/icon_silvermedal.png" alt= "goldmedal"/>
          <strong>
            닉네임2
          </strong>
          <data>
            운동기록2
          </data>
        </li>
        <li>
          <img src="../images/icon_bronzemedal.png" alt= "goldmedal"/>
          <strong>
            닉네임3
          </strong>
          <data>
            운동기록3
          </data>
        </li>
    </TodayKingContainer>
  )
}