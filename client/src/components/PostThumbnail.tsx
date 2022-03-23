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
  > #up-container{
    padding: 1.5rem;
    > .post-title {
      font-size: 1.5rem;
    }
    > .post-content {
      color: grey;
    }
    > .post-social {
      > .post-likes {
      position: relative;
      }
      > .post-comments {
      }
    }
    
  }
  > #down-container {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    > #profile-container {
    display: flex;
    flex-direction: column;
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
  > #exercise-container{
    text-align: left;
    border-collapse: collapse;
    > tr:not(:last-of-type) {
      text-align: left;
      border-bottom: 1px solid #444444;
    }
    > th, td {
      padding-left: 1rem;
    }
  }
  }
`

export default function PostThumbnail() {
  return (
    <Postthumb>
      <img src="../images/photo_postthumb.jpg" alt="post_image"/>
      <div id="up-container">
        <div className="post-title">제목입니다</div>
        <div className='post-content'>제가 오늘 쇠질을 했는데 무게가...</div>
        <div className="post-social">
          <span className="post-likes">
            <i className="fa-regular fa-heart"></i>
            100
          </span>
          <span className="post-comments">
            <i className="fa-regular fa-comment-dots"></i>
            2
          </span>
        </div>
      </div>
      <div id='down-container'>
      <div id="profile-container">
      <div id="photo-container">
        <img className='user-photo' src="../images/photo_defaultuser.png" alt="profile_image"/>
      </div>
      <strong>
        닉네임
      </strong>
      </div>
      <table id ="exercise-container">
	      <tr>
	        <th>난이도</th>
	        <td>&#9733;&#9733;&#9733;&#9733;&#9733;</td>
	      </tr>
	      <tr>
	        <th>소요시간</th>
	        <td>1시간 30분</td>
	      </tr>
        <tr>
	        <th>운동부위</th>
	        <td>전신</td>
	      </tr>
      </table>
      </div>
    </Postthumb>
  )
}