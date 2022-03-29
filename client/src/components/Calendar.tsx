interface CalendarProps{
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}
const Calendar:React.FC<CalendarProps> = ({date, setDate}) => {
  return (
    <div>
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
    </div>
  )
}

export default Calendar