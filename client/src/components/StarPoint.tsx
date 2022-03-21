import { useState } from "react";
import '../css/StarPoint.css';
// import styled from "styled-components"

// export const Stars = styled.div`
//   border:solid 1px #ccc;
//   display:flex;
//   flex-direction: row-reverse;
//   font-size:1.5em;
//   justify-content:space-around;
//   padding:0 .2em;
//   text-align:center;
//   width:5em;
//   > input {
//     display:none;
//   }
//   > label {
//     color:#ccc;
//     cursor:pointer;
//   }
//   > label:hover,
//   > label:hover ~ label {
//     color:#fc0;
//   }
//   &:checked ~ label {
//     color:#f90;
//   }
// `

export default function StarPoint() {
  return (
<div className="star-rating">
  <input type="radio" id="5-stars" name="rating" value="5" />
  <label htmlFor="5-stars" className="star">&#9733;</label>
  <input type="radio" id="4-stars" name="rating" value="4" />
  <label htmlFor="4-stars" className="star">&#9733;</label>
  <input type="radio" id="3-stars" name="rating" value="3" />
  <label htmlFor="3-stars" className="star">&#9733;</label>
  <input type="radio" id="2-stars" name="rating" value="2" />
  <label htmlFor="2-stars" className="star">&#9733;</label>
  <input type="radio" id="1-star" name="rating" value="1" />
  <label htmlFor="1-star" className="star">&#9733;</label>
</div>
  )
}
