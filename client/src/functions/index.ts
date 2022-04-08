export function showTime(duration: number) {
  let seconds: number | string = Math.floor(duration % 60);
  let minutes: number | string = Math.floor((duration / 60) % 60);
  let hours: number | string = Math.floor((duration / (60 * 60)) % 24);
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hours + "시간 " + minutes + "분 " + seconds + "초";
}

export const showToday = () => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let daynum = today.getDay();

  const checkDay = (daynum: number): string => {
    let day = "";
    let week = ["일", "월", "화", "수", "목", "금", "토"];
    return (day = week[daynum]);
  };

  return `${month}월 ${date}일 ${checkDay(daynum)}요일`;
};

export const getDate = () => {
  let today = new Date();
  let year: number | string = today.getFullYear();
  let month: number | string = today.getMonth() + 1;
  let date: number | string = today.getDate();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  return `${year}-${month}-${date}`;
};

export function secToTime(duration:number) {
  let seconds :(number|string) = Math.floor(duration % 60); 
  let minutes :(number|string) = Math.floor((duration / 60) % 60); 
  let hours :(number|string) = Math.floor((duration / (60 * 60)) % 24); 
  hours = (hours < 10) ? "0" + hours : hours; 
  minutes = (minutes < 10) ? "0" + minutes : minutes; 
  seconds = (seconds < 10) ? "0" + seconds : seconds; 
  return hours + ":" + minutes + ":" + seconds; 
} 

