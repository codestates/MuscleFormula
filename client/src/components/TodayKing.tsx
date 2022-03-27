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
  border-radius: 40px;
  background-color: #f2f2f2;
  > table {
    > tr {
      > th {
        > img {
          width: 40px;
        }
      }
      > td {
        text-align: center;
        padding: 0rem 1rem;
      }
    }
  }
`
export default function TodayKing() {
  return (
    <TodayKingContainer>
      <table>
        <tr>
          <th>
          <img src="../images/icon_goldmedal.png" alt= "goldmedal"/>
          </th>
          <th>
          <img src="../images/icon_silvermedal.png" alt= "silvermedal"/>
          </th>
          <th>
          <img src="../images/icon_bronzemedal.png" alt= "bronzemedal"/>
          </th>
        </tr>
        <tr>
          <th>
           금메달유저
          </th>
          <th>
            은메달유저
          </th>
          <th>
            동메달유저
          </th>
        </tr>
        <tr>
          <td>
            00:00:00
          </td>
          <td>
            00:00:00
          </td>
          <td>
            00:00:00
          </td>
        </tr>
      </table>
    </TodayKingContainer>
  )
}