import styled from "styled-components"

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  > input {
    border: none;
    width: 20px;
    font-size: large;
    background-color: transparent;
  }
  > input:focus {
    outline: none;
  }
  > input[type=date]::-webkit-datetime-edit-text { 
    -webkit-appearance: none; 
    display: none; 
  } 
  > input[type=date]::-webkit-datetime-edit-month-field { 
    -webkit-appearance: none; 
    display: none; 
  } 
  > input[type=date]::-webkit-datetime-edit-day-field { 
    -webkit-appearance: none; 
    display: none; 
  } 
  > input[type=date]::-webkit-datetime-edit-year-field { 
    -webkit-appearance: none; 
    display: none; 
  }
`

interface CalendarProps{
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}
const Calendar:React.FC<CalendarProps> = ({date, setDate}) => {
  const getDate = () => {
    let today = new Date();
    let year: number | string = today.getFullYear();
    let month: number | string = today.getMonth() + 1;
    let date: number | string = today.getDate();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    return `${year}-${month}-${date}`;
  };
  const showToday = () => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let daynum = today.getDay();

    const checkDay = (daynum: number): string => {
      let day = "";
      let week = ["일", "월", "화", "수", "목", "금", "토"];
      return day = week[daynum];
    };
    return `${month}월 ${date}일 ${checkDay(daynum)}요일`
  };
  
  // var now = new Date();	// 현재 날짜 및 시간
  // console.log("현재 : ", now);
  // var yesterday = new Date(now.setDate(now.getDate() - 1));	// 어제
  // console.log("어제 : ", yesterday); 
  // var tomorrow = new Date(now.setDate(now.getDate() + 1));	// 내일
  // console.log("내일 : ", tomorrow);

  return (
    <CalendarContainer>
      <input type="date"
        required pattern="\d{4}-\d{2}-\d{2}"
        max={getDate()} 
        value={date} 
        onChange={(e)=>setDate(e.target.value)}/>
      <div className="today">
        {showToday()}
      </div>
    </CalendarContainer>
  )
}

export default Calendar