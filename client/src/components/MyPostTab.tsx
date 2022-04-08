import PostThumbnail from "./PostThumbnail";
import { useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../slideSetting";
import styled from 'styled-components';
import NoPost from "./NoPost";

export const TabMenu = styled.ul`
  background-color: #f2f2f2;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin: 0;

  .submenu {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    padding: 1rem;
    cursor: pointer;
    box-shadow: 0px -3px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .focused {
    background-color: #00cc99;
    color: rgba(255, 255, 255, 1);
    transition: 0.3s;
  }
`;

export const Desc = styled.div`
  padding: 3rem;
`;

interface PostTabProps {
  myPosts : {postId: number;
    postImage: string;
    postTitle: string;
    info: string;
    total_Likes: any[];
    total_comments: any[];
    user: { userId: number; nickname: string; image: string };
    difficult: number;
    totalTime: number;
    bodyPart: string;
    created_At: string;}[];
  likedPosts : {postId: number;
    postImage: string;
    postTitle: string;
    info: string;
    total_Likes: any[];
    total_comments: any[];
    user: { userId: number; nickname: string; image: string };
    difficult: number;
    totalTime: number;
    bodyPart: string;
    created_At: string;}[];
}
export const MyPostTab:React.FC<PostTabProps> = ({ myPosts, likedPosts }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { name: '공유한 포스팅', content: myPosts },
    { name: '좋아요한 포스팅', content: likedPosts },
  ];

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index);
  };

  return (
      <div>
        <TabMenu>
          {menuArr.map((ele, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? 'submenu focused' : 'submenu'}
                onClick={() => selectMenuHandler(index)}
              >
                {ele.name}
              </li>
            );
          })}
        </TabMenu>
        <Desc>
        <Slider {...settings}>
        {
        menuArr[currentTab].content.length > 0 ?
        menuArr[currentTab].content.map((el, idx) => <PostThumbnail postThumb = {el} key={idx}/>)
        : <NoPost/>}
        </Slider>
        </Desc>
      </div>
  );
};

export default MyPostTab;