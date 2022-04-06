import styled from "styled-components";
import { useState } from "react";

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
  & :checked ~ label {
    color: #f90;
  }
`;
interface FixedStarPointProps {
  difficult: number;
}

const FixedStarPoint: React.FC<FixedStarPointProps> = (number) => {
  const [difficult, setDifficult] = useState('checked');
  
  return (
    <Stars>
      <input
        type="radio"
        id="5-stars"
        name="rating"
        value="5"
        readOnly
        onClick={()=> false}
      />
      <label htmlFor="5-stars" className="star">
        ★
      </label>
      <input
        type="radio"
        id="4-stars"
        name="rating"
        value="4"
        readOnly
        onClick={()=> false}
      />
      <label htmlFor="4-stars" className="star">
        ★
      </label>
      <input
        type="radio"
        id="3-stars"
        name="rating"
        value="3"
        checked
        readOnly
        onClick={()=> false}
      />
      <label htmlFor="3-stars" className="star">
        ★
      </label>
      <input
        type="radio"
        id="2-stars"
        name="rating"
        value="2"
        readOnly
        onClick={()=> false}
      />
      <label htmlFor="2-stars" className="star">
        ★
      </label>
      <input
        type="radio"
        id="1-star"
        name="rating"
        value="1"
        readOnly
        onClick={()=> false}
      />
      <label htmlFor="1-star" className="star">
        ★
      </label>
    </Stars>
  );
};

export default FixedStarPoint;
