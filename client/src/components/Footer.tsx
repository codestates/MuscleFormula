import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const Foot = styled.footer`
  display: flex;
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
    transition: all 0.9s, color 0.3;
  }
  > .go-to-up :hover {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 5px 5px rgba (0, 0, 0, 0.6);
    -o-box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
    border-radius: 100px;
  }

  a {
    color: darkgrey;
    text-decoration: none;
  }
  > .team-name-container {
    padding: 0.6rem 0rem;
  }
  > .source-container {
    text-align: center;
    padding-bottom: 1rem;
    font-size: x-small;
    > span {
      cursor: pointer;
      color: darkgrey;
    }
  }
`;
export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollUp = () => {
    window.scrollBy(0, -window.innerHeight);
  };

  const navigate = useNavigate();

  return (
    <Foot>
      <div className="go-to-up" onClick={scrollTop}>
        <i className="fa-solid fa-circle-chevron-up"></i>
      </div>
      <div className="team-name-container">
        <a href="https://github.com/codestates/MuscleFormula">
          <i className="fa-brands fa-github"></i>Muscle Formula
        </a>
      </div>
      <div className="source-container">
        <a href="https://icons8.com">아이콘Icons8</a>에서 아이콘 제공 &nbsp;
        <br />
        <span
          onClick={() => {
            navigate("/privacypolicy");
          }}
        >
          PrivacyPolicy
        </span>{" "}
        <span
          onClick={() => {
            navigate("/termsandconditions");
          }}
        >
          Terms&Conditions
        </span>
      </div>
    </Foot>
  );
}
