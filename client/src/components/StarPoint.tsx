import styled from "styled-components";

export const Stars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-size: 1.5em;
  justify-content: space-around;
  padding: 0 0.2em;
  text-align: center;
  width: 5em;
  > input {
    display: none;
  }
  > label {
    color: #ccc;
    cursor: pointer;
  }
  > label:hover,
  > label:hover ~ label {
    color: #fc0;
  }
  & :checked ~ label {
    color: #f90;
  }
`;
interface StarPointProps {
  setDifficult: React.Dispatch<React.SetStateAction<number>>;
}

const StarPoint: React.FC<StarPointProps> = ({ setDifficult }) => {
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDifficult(Number(e.target.value));
  };
  return (
    <Stars>
      <input
        type="radio"
        id="5-stars"
        name="rating"
        value="5"
        onChange={handleValue}
      />
      <label htmlFor="5-stars" className="star">
        ★
      </label>
      <input
        type="radio"
        id="4-stars"
        name="rating"
        value="4"
        onChange={handleValue}
      />
      <label htmlFor="4-stars" className="star">
        ★
      </label>
      <input
        type="radio"
        id="3-stars"
        name="rating"
        value="3"
        onChange={handleValue}
      />
      <label htmlFor="3-stars" className="star">
        ★
      </label>
      <input
        type="radio"
        id="2-stars"
        name="rating"
        value="2"
        onChange={handleValue}
      />
      <label htmlFor="2-stars" className="star">
        ★
      </label>
      <input
        type="radio"
        id="1-star"
        name="rating"
        value="1"
        onChange={handleValue}
      />
      <label htmlFor="1-star" className="star">
        ★
      </label>
    </Stars>
  );
};

export default StarPoint;
