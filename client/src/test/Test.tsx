import styled from "styled-components";
import labelStarPoint from "../functions/labelStarPoint";

export const TestContainer = styled.div`
  padding-top: 5rem;
`
function Test() {
  return (
    <TestContainer>
      {labelStarPoint(5)}
      {labelStarPoint(4)}
      {labelStarPoint(3)}
      {labelStarPoint(2)}
      {labelStarPoint(1)}
      {labelStarPoint(0)}
    </TestContainer>
  );
}

export default Test;
