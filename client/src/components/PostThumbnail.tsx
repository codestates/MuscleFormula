/**메인 화면에 뜨는 포스트 썸네일**/
import styled from "styled-components"
export const Postthumb = styled.div`
  flex: none;
  width: 80vw;
  max-width: 300px;
  border: 1px solid black;
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
  > #profile-container{
    padding: 1rem;
    > img {
      width: 30px;
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
          <img src="../images/icon_heart_fill.png" alt="likes"/>
          100
        </span>
        <span className="post-comments">💬 2</span>
      </div>
      <div id="profile-container">
        <img src="../images/photo_defaultuser.png" alt="profile_image"/>
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