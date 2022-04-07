/**내 기록 확인**/
import styled from "styled-components"

export const TodayRecordContainer = styled.ol`
  position : relative;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding: 1rem;
  width: 80vw;
  max-width: 310px;
  list-style-type: none;
  border-radius: 20px;
  background-color: #00cc99;
  > table {
    > tbody
      > tr {
        > th, td {
          text-align: center;
          padding: 0rem 0.7rem;
        }
      }
  }
`
interface TodayRecordProps {
  lastTime: string; 
  todayTime: string; 
  bestTime: string;
}

const TodayRecord:React.FC<TodayRecordProps> = ({lastTime, todayTime, bestTime}) => {
  return (
    <TodayRecordContainer>
      <table>
        <tbody>
          <tr>
            <th>
             어제 기록
            </th>
            <th>
            오늘 기록
            </th>
            <th>
            최고 기록
            </th>
          </tr>
          <tr>
            <td>
              {lastTime}
            </td>
            <td>
              {todayTime}
            </td>
            <td>
              {bestTime}
            </td>
          </tr>
        </tbody>
      </table>
    </TodayRecordContainer>
  )
}

export default TodayRecord;