import styled from "styled-components";
import FixedStarPoint from "../components/FixedStarPoint";

export const TestContainer = styled.div`
  padding-top: 5rem;
`
function Test() {
  return (
    <TestContainer>
      <FixedStarPoint difficult={5}/>
    </TestContainer>
  );
}

export default Test;
