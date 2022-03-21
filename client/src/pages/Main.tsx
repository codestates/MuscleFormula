import '../css/Main.css';
import Search from '../components/Search';
import PostThumbnail from '../components/PostThumbnail';
import TodayKing from '../components/TodayKing';
export default function Main() {
  console.log('메인페이지');
  return (
    <div id='main-container'>
      <div className='todayking-container'>
        <TodayKing/>
      </div>
      <div className='search-container'>
        <Search/>
      </div>
      <div className='postthumb-container'>
        <PostThumbnail/>
      </div>
    </div>
  )
}