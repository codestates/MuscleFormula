/**메인 화면에 뜨는 포스트 썸네일**/
import styled from "styled-components"
export const Postthumb = styled.div`

`

export default function PostThumbnail() {
  return (
    <Postthumb>
      타이틀이미지
      타이틀
      좋아요수
      프로필 사진
      닉네임
      소요시간
      난이도
      운동부위
    </Postthumb>
  )
}