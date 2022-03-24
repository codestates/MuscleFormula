import '../css/Main.css';
import dummyThumbs from './dummy/dummyThumbs';
import Search from '../components/Search';
import PostThumbnail from '../components/PostThumbnail';
import TodayKing from '../components/TodayKing';
export default function Main() {
  console.log('메인페이지');
  return (
    <div id='main-container'>
      <div id='todayking-container'>
        <TodayKing/>
      </div>
      <div id='search-container'>
        <Search/>
      </div>
      <div id='postthumb-container'>
        {dummyThumbs.map((el, idx) =><div className='post-thumbs'><PostThumbnail postThumb={el} key={idx}/></div>)}
      </div>
    </div>
  )
}