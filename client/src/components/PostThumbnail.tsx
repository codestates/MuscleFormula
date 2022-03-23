/**메인 화면에 뜨는 포스트 썸네일**/
import styled from "styled-components"
export const Postthumb = styled.div`
  flex: none;
  width: 80vw;
  max-width: 300px;
  border: 1px solid black;
  border-radius: 15px;
  overflow: hidden;
  > img {
    width: 100%;
  }
  > #title-container{
    padding: 1rem;
    >.post-title {
      font-size: 1.5rem;
    }
    > .post-likes {
      position: relative;
      > img {
        width: 20px;
        top: 50%;
        left: 50%;
      }
    }
  }
  > #profile-container {
    padding: 1rem;
    display: flex;
    > #photo-container{
      position: relative;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      overflow: hidden;
    > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      }
    }
  }
  
  
  > #summary-container{
    padding: 1rem;
  }
`

export default function PostThumbnail() {
  return (
    <Postthumb>
      <img src="../images/photo_postthumb.jpg" alt="post_image"/>
      <div id="title-container">
        <span className="post-title">제목입니다</span>
        <span className="post-likes">
          <i className="fa-regular fa-heart"></i>
          100
        </span>
        <span className="post-comments">
          <i className="fa-regular fa-comment-dots"></i>
          2
        </span>
      </div>
      <div id= "profile-container">
      <div id="photo-container">
        <img className='user-photo' src="../images/photo_defaultuser.png" alt="profile_image"/>
      </div>
      <strong>
        닉네임
      </strong>
      </div>
      <div id="summary-container">
      소요시간
      난이도
      운동부위
      </div>
    </Postthumb>
  )
}