/**마이 페이지**/
import '../css/Mypage.css'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch} from '../store'

export default function Maypage() {
  console.log('user')
  const user = useSelector((state:RootState) => state.userInfo.userInfo);
  return (
    <div id='mypage-container'>
      <header className='mypage-greeting'>
      안녕하세요 <strong>{user.nickname}</strong> 님
      </header>
      <div className='share-container'>
        아직 공유한 운동이 없으시네요. 어서 공유해보세요!
      </div>
    </div>
  )
}