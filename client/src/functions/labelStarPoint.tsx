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
  .color {
    color: #f90;
  }
  .no-color {
    color: #ccc;
  }
`;

export default function labelStarPoint (number:number) {

  return (
    <Stars>
      <label className={5 - number > 0 ? `no-color` : `color`}>
        ★
      </label>
      <label className={4 - number > 0 ? `no-color` : `color`}>
        ★
      </label>
      <label className={3 - number > 0 ? `no-color` : `color`}>
        ★
      </label>
      <label className={2 - number > 0 ? `no-color` : `color`}>
        ★
      </label>
      <label className={1 - number > 0 ? `no-color` : `color`}>
        ★
      </label>
    </Stars>
  );
};
