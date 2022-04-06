import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../slideSetting";
import PostThumbnail from "../components/PostThumbnail";
import { useEffect, useState } from "react";
import { axios_Get_Posts } from "../axios";

export default function ReactSlick() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios_Get_Posts().then((res) => {
      setPosts(res.data.posts);
      console.log(res.data.posts);
    });
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {posts.map((el, idx) => (
          <PostThumbnail key={idx} postThumb={el} />
        ))}
      </Slider>
    </div>
  );
}
