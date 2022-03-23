import '../css/SignUpTest.css';
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
          <div className='userNick'>
            <div>닉네임</div>
            <input type="text"></input>
            <button>중복<br></br>확인</button>
          </div>
          <div className='userPassword'>
            <div>비밀번호</div>
            <input type="password"></input>
          </div>
          <div className='userPasswordCheck'>
            <div>비밀번호 확인</div>
            <input type="password"></input>
          </div>
          <div id="signupButten">
          
          <button>회원가입</button>
        </div>
        </div>

      </div>
    </div>
  )
}