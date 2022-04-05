import styled from "styled-components"
import { useState } from "react";

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > .before {
    padding-right: 1.5rem;
    cursor: pointer;
  }
  > .date-container{
    display: flex;
    flex-direction: row;
    > .specified {
      
    }
    /* > input {
    border: none;
    width: 20px;
    font-size: large;
    background-color: transparent;
    }
    > input:focus {
      outline: none;
    } */
    /* > input[type=date]::-webkit-datetime-edit-text { 
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
    } */
  }
  > .after {
    padding-left: 1.5rem;
    cursor: pointer;
  }
  > .noshow {
    padding-left: 1.5rem;
    visibility: hidden;
  }
`

interface CalendarProps{
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}
const Calendar:React.FC<CalendarProps> = ({date, setDate}) => {

  const handleDate = () => {
    
  }

  const getDate = (specified :Date) => {
    let year: number | string = specified.getFullYear();
    let month: number | string = specified.getMonth() + 1;
    let date: number | string = specified.getDate();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    return `${year}-${month}-${date}`;
  };

  const [number, setNumber] = useState(0);

  const showDay = (number: number) => {
    let today = new Date();
    let specified = new Date((today.setDate(today.getDate() + number)))
    let month = specified.getMonth() + 1;
    let date = specified.getDate();
    let daynum = specified.getDay();

    const checkDay = (daynum: number): string => {
      let week = ["일", "월", "화", "수", "목", "금", "토"];
      return week[daynum];
    };

    let submitDate = getDate(specified);
    setDate(submitDate);

    return `${month}월 ${date}일 ${checkDay(daynum)}요일`
  };

  return (
    <CalendarContainer>
      <div className="before">
        <i className="fa-solid fa-angle-left" onClick={()=>(setNumber((cur)=> cur-1))}></i>
      </div>
      <div className="date-container">
        {/* <input type="date"
          required pattern="\d{4}-\d{2}-\d{2}"
          // max={getDate(new Date())} 
          value={date}
          onChange={(e)=>setDate(e.target.value)}/> */}
        <div className="specified" onClick={handleDate}> 
          {showDay(number)}
        </div>
      </div>
      <div className={number < 0 ? "after" : "noshow"} onClick={()=>(setNumber((cur)=> cur+1))}>
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </CalendarContainer>
  )
}

export default Calendar