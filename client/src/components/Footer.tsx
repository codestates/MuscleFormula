import styled from 'styled-components';

export const Foot = styled.footer`  
  font-family: "IBM Plex Sans KR", sans-serif;
  /* margin-top:40rem; */
  display:flex ;
  flex-direction: column;
  width: 100%;
  background-color: rgb(155, 170, 170);
  color: #000000cc;
 > button.btn-big{
    padding: .3rem 1rem;
    background: #00ff99;
    color: black;
    border: 1px solid transparent;
    border-radius: .25rem;
  }  
 
  > .footer-container {
    width:100%;
    display: flex;
    flex-direction: row;
    height: 300px;
  }

  > .footer-container .footer-section{
    flex: 1;
    padding :25px;
    border: 1px solid green ;
    }

  > .footer-container h1, .footer-container h2{
     color: black;
   }
  //https://www.youtube.com/watch?v=jZ2XYDWKENs
  > .footer-container .about h1 span { 
/* color: #00cc99; */
    color:#00ff99;
 }
> .footer-container .about .contact span {
  /* border: dashed blue; */
  display: block;
  font-size:1.1 em;
  margin-bottom: 0.1 rem;
}

> .footer-container .about a {
  border: 1.5px solid gray;
  width:  30px; 
  /* width:768px  모바일*/
  height:35px;
  color: #00ff99;
  padding-top: 5px;
  margin-right: 10px;
  text-align: center;
  display:inline-block;
  font-size: 1.5 em;
  border-radius: 5px;
}

> .footer-container .about a:hover {
  border: 1px solid white;
  color: white;
  transition: all .3s;
} 

> .footer-container .links ul a {
  display:flex;
  font-size:1.1 em;
  margin-bottom:0.1rem;
  text-decoration-line: none;
  list-style:none;
  /* border: 1px solid white; */
  color:#000000cc;

} 
> .footer-container .links ul a:hover {
  color:white;
  margin-left: 15px;
  transition: all .3s;

} 

> .footer-container .contact-input{
  /* border: solid 1px red; */

  background: #1a1a1a;
  color: #d4cece;
  margin-bottom: 0.65rem;
  line-height: 1.45rem;
  padding: .6rem 1.5rem;
  border: none;
}

> .footer-container .contact-input:focus{
background: #000000;
}
> .footer-bottom{
  color: #686868;
  background : #303036;
  height: 1px;
  width: 100%;
  text-align : center;
  bottom :0px;
  left:0px;
  padding-top: 20px;
  border: 1px solid darkblue;
}
`;

export default function Footer() {
  return (
    <Foot>
        <div className='footer-container'>
          <div className='footer-section about'>
            <h1 className='logo-text' ><span>Muscle</span>Formula</h1>
            <p>
            2022년 03월 17일 누가 만든 공식인가
            </p>
            <div className='contact'>
              <span><i className='fas fa-phone'></i>&nbsp; 123-123-123</span> 
              <span><i className='fas fa-envelope'></i>&nbsp;test@example.com</span>
            </div>

            <div className="soicals">
              <a href="#"><i className='fab fa-facebook'></i></a>
              <a href="#"><i className='fab fa-instagram'></i></a>
              <a href="#"><i className='fab fa-twitter'></i></a>
              <a href="#"><i className='fab fa-youtube'></i></a>
            </div>
          </div> 
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
            <a href="/main"><li>메인</li></a>
            <a href="/record"><li>운동기록</li></a>
            <a href="/mypage"><li>공유하기</li></a>
            <a href="/alarm"><li>알림</li></a>
            <a href="/chat"><li>채팅</li></a>            
          </ul>  
          </div>
  
        <div className="footer-section contact-form">      
        <h2>Contact us</h2>

          <form action="index.tsx" method="post">
            <input type="email" name= "email" className='text-input contact-input' placeholder='Your email address'/>
            <textarea name = "message" cols ={30} rows={1} className='text-input contact-input' placeholder='메시지 입력'/>
          <button type="submit" className="btn-big">
            <i className="fas fa-envelope"></i>
            보내기</button>
          </form>
        </div>
      
      </div> 
      <div className="footer-bottom"> 
        &copy; Muscle Formula || Desinged by GG 
      </div>  
    </Foot>
  )}