/**메인 화면에 뜨는 포스트 썸네일**/
import React from "react"
import styled from "styled-components"
export const Postthumb = styled.div`
  flex: none;
  width: 80vw;
  max-width: 270px;
  border: 1px solid lightgrey;
  border-radius: 15px;
  box-shadow: 2px 3px 10px 0px rgba(0,0,0,0.2);
  overflow: hidden;
  &:hover {
    opacity: 0.6;
  }
  > #image-container {
    height: 120px;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
  > #up-container{
    padding: 1rem;
    height: 110px;
    > .post-title {
      font-size: large;
      font-weight: bold;
      margin-bottom: 0.3rem;
      max-height: 1.3em;
      overflow: hidden;
    }
    > .post-content {
      margin-bottom: 0.7rem;
      font-size: small;
      max-height: 1.3em;
      overflow: hidden;
    }
    > .post-social {
      font-size: small;
      > .post-date {
        color: grey;
        margin-right: 0.5rem;
      }
      > .post-likes {
        margin-right : 0.5rem;
      }
      > .post-comments {
      }
    }
    
  }
  > #down-container {
    padding: 0rem 1rem 1rem 1rem;
    display: flex;
    height: 100px;
    justify-content: space-between;
    > #profile-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 3.6rem;
      > #profile-photo-container{
        display: flex;
        align-items: center;
        justify-content: center;
        > #photo-container{
          position: relative;
          width: 2.5rem;
          height: 2.5rem;
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
      >.user-nickname{
        padding-top: 0.3rem;
        font-size: small;
        overflow: hidden;
        max-height: 3em;
      }
    }
    > #exercise-container{
      text-align: left;
      border-collapse: collapse;
      margin-left: 0.5rem;
      font-size: small;
      > tr:not(:last-of-type) {
        text-align: left;
        border-bottom: 1px solid lightgrey;
      }
      > th, td {
        padding-left: 0.5rem;
      }
    }
  }
`

interface PostThumbnailProps {
  postThumb: {
    postImage: string,
    title: string,
    content: string,
    likes: number,
    comments: number,
    image: string,
    nickname: string,
    difficulty: number,
    record: string,
    bodypart:string,
    createdAt: string
  }
}

const PostThumbnail:React.FC<PostThumbnailProps> = ({postThumb}) => {
  return (
    <Postthumb>
      <div id="image-container">
        <img src={postThumb.postImage} alt="post_image"/>
      </div>
      <div id="up-container">
        <div className="post-title">{postThumb.title}</div>
        <div className='post-content'>{postThumb.content}</div>
        <div className="post-social">
          <span className="post-date">{postThumb.createdAt}</span>
          <span className="post-likes">
            <i className="fa-regular fa-heart"></i>
            {postThumb.likes}
          </span>
          <span className="post-comments">
            <i className="fa-regular fa-comment-dots"></i>
            {postThumb.comments}
          </span>
        </div>
      </div>
      <div id='down-container'>
      <div id="profile-container">
        <div id="profile-photo-container">
      <div id="photo-container">
        <img className='user-photo' src={postThumb.image} alt="profile_image"/>
      </div>
      </div>
      <strong className='user-nickname'>
      {postThumb.nickname}
      </strong>
      </div>
      <table id ="exercise-container">
	      <tr>
	        <th>난이도</th>
	        <td>{postThumb.difficulty}</td>
	      </tr>
	      <tr>
	        <th>소요시간</th>
	        <td>{postThumb.record}</td>
	      </tr>
        <tr>
	        <th>운동부위</th>
	        <td>{postThumb.bodypart}</td>
	      </tr>
      </table>
      </div>
    </Postthumb>
  )
}
export default PostThumbnail;