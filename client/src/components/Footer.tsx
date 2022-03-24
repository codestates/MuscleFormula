import styled from 'styled-components';

export const Foot = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  > #footer-container {
    display: flex;
    padding: 1rem;
    background-color: rgb(155, 170, 170);
  }
`

export default function Footer() {
  return (
    <Foot>
      <div id='footer-container'>
        2022년 03월 17일 누가 만든 공식인가
      </div>
    </Foot>
  )
}