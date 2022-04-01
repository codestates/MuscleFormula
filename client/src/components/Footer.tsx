import styled from 'styled-components';

export function Scroll() {
  window.scrollBy(0,100)

}

 export const Foot = styled.footer`  


  display:flex;
      transform:translateY(100%); 
  flex-direction: column;
 
  width: 100%;

  color:#686868;

  > #destination .a {
    position :fixed;
 }
 
  > button.btn-big{
    padding: .3rem 1rem;
    background: #00ff99;
    color: black;
    border: 1px solid transparent;
    border-radius: .25rem;
  }  
 
  > .footer-container {
    /* transform:translateY(100%);  */
    color: #686868;
    width:100%;
    display: flex;
    flex-direction: row;
    background:  #c0c0c0;

  }

  > .footer-container .footer-section{

    flex: 1;
    padding :25px;

    }

  > .footer-container h1, .footer-container p{
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

  margin-bottom: 0.1 rem;
}

> .footer-container .about a {
color: #686868;
text-decoration: none;
}

/* 
> .footer-container .about a:hover {
border: 1px solid white;
color: white;
transition: all .3s;
 

}*/  

> .footer-container .links ul a {
  display:flex;

  margin-bottom:0rem;
  text-decoration-line: none;
  list-style:none;
  /* border: 1px solid grey; */
  color:#000000cc;
  

} 
/* > .footer-container .links ul a:hover {
  color:white;
  margin-left: 15px;
  transition: all .3s;

}  */

> .footer-container .contact-input{
  /* border: solid 1px red; */
  
  display: flex;
  flex-direction:column;
  background: #686868;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1rem;
  padding: .2rem 1.1rem;
  /* border: none; */
}

> .footer-container .contact-input:focus{
  
  background:#686868;
}
> .footer-bottom{
  /* border: 1px solid red; */
  color: #686868;
  
  width: 100%;
  text-align : center;
  bottom :0px;
  left:0px;
  padding-top: 20px;
 
  /* border: 1px solid darkblue; */
} 
`;
export default function Footer() {
  return (
    <Foot>
      <div id ="destination">        
      <button onClick={Scroll}><i className="fa fa-arrow-up" aria-hidden="true"></i></button>
      </div>
        <div className='footer-container'>
          <div className='footer-section about'>
            <h1 className='logo-text' ><span>Muscle</span>Formula</h1>
            <p>
            &nbsp;설립일 :2022년 03월 17일 <br/>
            &nbsp;Project : GG , 근의 공식  <br/>
            &copy; Team 가보자고<br/>
            <a href="https://icons8.com">아이콘Icons8</a>에서 아이콘 제공
            </p>
            <div className='contact'>
              {/* <span><i className='fas fa-phone'></i>&nbsp; 123-123-123</span>  */}
              <span><i className='fas fa-envelope'></i>&nbsp;MuscleFormula365@gmail.com</span>
            </div>
           {/* <div className="socials">
             
              <a href="#"><i className='fab fa-facebook'></i></a>
              <a href="#"><i className='fab fa-instagram'></i></a>
              <a href="#"><i className='fab fa-twitter'></i></a>
              <a href="#"><i className='fab fa-youtube'></i></a>
            </div> */}
 
            </div> 
        <div className="footer-section links">
          <p>Quick Links</p>
          <ul>
           <a href="/main"><li>메인</li></a>
            <a href="/record"><li>운동기록</li></a>
            <a href="/mypage"><li>공유하기</li></a>
            <a href="/alarm"><li>알림</li></a>
            <a href="/chat"><li>채팅</li></a>            
          </ul>  
          </div>
  
        <div className="footer-section contact-form">      
        <p>Contact us</p>

          <form action="index.tsx" method="post">
            <input type="email" name= "email" className='text-input contact-input' placeholder='Your email address'/>
            <textarea name = "message" cols ={10} rows={1} className='text-input contact-input' placeholder='메시지 입력'/>
            </form>
          <button type="submit" className="btn-big">
            <i className="fas fa-envelope"></i>
            보내기</button>
       
        </div>
      </div> 
 
      
      <div className="footer-bottom"> 
        &copy; Muscle Formula || Desinged by GG 
      </div>  
 
    </Foot>
  )}