import styled from 'styled-components';



 export const Foot = styled.footer`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: grey;
  font-size: small;
  > .go-to-up {
    position: fixed;
    bottom: 5rem;
    right: 2rem;
    text-align: center;
    font-size: x-large;
  }
  a {
    color: darkgrey;
    text-decoration: none;
  }
  > .team-name-container {
    padding: 0.6rem 0rem;
  }
  > .source-container {
    padding-bottom: 1rem;
    font-size: x-small;
  }
`;
export default function Footer() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollUp = () => {
    window.scrollBy(0, -window.innerHeight);
  }

  return (
    <Foot>
      <div className="go-to-up" onClick={scrollUp}>
      <i className="fa-solid fa-circle-chevron-up"></i>
      </div>
      <div className='team-name-container'>
        <a href="https://github.com/codestates/MuscleFormula">
          <i className="fa-brands fa-github"></i>Muscle Formula
        </a>
      </div> 
      <div className="source-container">
        <a href="https://icons8.com">아이콘Icons8</a>에서 아이콘 제공
      </div>
    </Foot>
  )
}