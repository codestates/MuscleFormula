import '../css/LoginTest.css';
export default function LoginTest() {
  console.log('longin test페이지');
  return (
    <div id='LoginPage'>
      <div id='innerBox'>
       
        <img id='logo' src='../logo.png' alt='logo'/>

        <div className='userLonginInfo'>
          <div className='userId'>
            <div>아이디</div>
            <input type="text"></input>
          </div>
          <div className='userPassword'>
            <div>비밀번호</div>
            <input type="password"></input>
          </div>
          <div>
            아이디가 없으시나요?
          </div>
        </div>
        <div id="oAuth">
          <img></img>
          <img></img>
        </div>
      </div>
    </div>
  )
}