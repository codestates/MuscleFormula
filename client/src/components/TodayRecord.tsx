/**오늘의 운동왕**/
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
  background-color: #f2f2f2;
  > table {
    > tbody
      > tr {
        > th, td {
          text-align: center;
          padding: 0rem 0.5rem;
        }
      }
  }
`
export default function TodayRecord() {
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
              00:00:00
            </td>
            <td>
              00:00:00
            </td>
            <td>
              00:00:00
            </td>
          </tr>
        </tbody>
      </table>
    </TodayRecordContainer>
  )
}