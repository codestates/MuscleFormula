import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mobile, PC } from "../mediaQuery";
import axios from "axios";
import Footer from "../components/Footer";
import "../css/Main.css";
import dummyThumbs from "./dummy/dummyThumbs";
import Search from "../components/Search";
import PostThumbnail from "../components/PostThumbnail";
import TodayKing from "../components/TodayKing";
import { axios_GetPosts } from "../axios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import NoPost from "../components/NoPost";

export default function Main() {
  let shareRecordsId = useSelector(
    (state: RootState) => state.shareRecord.shareRecordId
  );
  const [posts, setPosts] = useState([]);
  const [rankData, setRankData] = useState<{total_time: string, nickname: string}[]>([]);

  useEffect(() => {
    axios_GetPosts().then((res) => {
      setPosts(res.data.posts);
      setRankData(res.data.rankData);
    });
  }, [shareRecordsId]);

  const navigate = useNavigate();
  const code = new URLSearchParams(window.location.search).get("code");
  console.log("code", code);
  return (
    <div id="main-container">
      <div id="todayking-container">
        <TodayKing rankData={rankData}/>
      </div>
      <div id="search-container">
        <Search />
      </div>
      <div id="postthumb-container">
        {posts.length > 0 
        ? posts.map((el, idx) => (
          <div className="post-thumbs" key={idx}>
            <PostThumbnail postThumb={el} key={idx} />
          </div>
          ))
        : <NoPost/>}
      </div>
      <PC>
        <Footer />
      </PC>
    </div>
  );
}
