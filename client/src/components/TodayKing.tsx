/**오늘의 운동왕**/
import styled from "styled-components"

export const TodayKingContainer = styled.ol`
  position : relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  padding: 1rem;
  width: 80vw;
  max-width: 310px;
  list-style-type: none;
  border-radius: 30px;
  background-color: #f2f2f2;
  > table {
    > tbody
      > tr {
        > th {
          width: 5rem;
          > img {
            width: 40px;
          }
        }
        > td {
          text-align: center;
          padding: 0rem 0.5rem;
        }
      }
  }
`

interface TodayKingProps{
  rankData: {
    total_time: string;
    nickname: string;
}[]
}
const TodayKing:React.FC<TodayKingProps> = ({rankData}) => {
  return (
    <TodayKingContainer>
      <table>
        <tbody>
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
            {rankData[0] ? rankData[0].nickname : '없음'}
          </th>
          <th>
            {rankData[1] ? rankData[1].nickname : '없음'}
          </th>
          <th>
            {rankData[2] ? rankData[2].nickname : '없음'}
          </th>
        </tr>
        <tr>
          <td>
            {rankData[0] ? rankData[0].total_time : '기록없음'}
          </td>
          <td>
            {rankData[1] ? rankData[1].total_time : '기록없음'}
          </td>
          <td>
            {rankData[2] ? rankData[2].total_time : '기록없음'}
          </td>
        </tr>
        </tbody>
      </table>
    </TodayKingContainer>
  )
}

export default TodayKing;