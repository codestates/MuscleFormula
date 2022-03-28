import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Mobile, PC } from "../mediaQuery";
import axios from "axios";
import Footer from "../components/Footer";
import "../css/Main.css";
import dummyThumbs from "./dummy/dummyThumbs";
import Search from "../components/Search";
import PostThumbnail from "../components/PostThumbnail";
import TodayKing from "../components/TodayKing";
export default function Main() {
  console.log("메인페이지");
  useEffect(() => {
    axios.get(`http://localhost:4000/posts`).then((res) => {
      console.log("모든 포스트 정보:", res);
    });
  }, []);

  const navigate = useNavigate();
  const code = new URLSearchParams(window.location.search).get("code");
  console.log("code", code);
  return (
    <div id="main-container">
      <div id="todayking-container">
        <TodayKing />
      </div>
      <div id="search-container">
        <Search />
        <button
          onClick={() => {
            navigate("/editor");
          }}
        >
          글쓰기
        </button>
      </div>
      <div id="postthumb-container">
        {dummyThumbs.map((el, idx) => (
          <div className="post-thumbs" key={idx}>
            <PostThumbnail postThumb={el} key={idx} />
          </div>
        ))}
      </div>
      <PC>
        <Footer/>
      </PC>
    </div>
  );
}
