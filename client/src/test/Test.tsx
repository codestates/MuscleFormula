import ReactSlick from "./ReactSlick";
import styled from "styled-components";

export const TestContainer = styled.div`
  padding-top: 5rem;
`
function Test() {

  return (
    <TestContainer>
      <ReactSlick/>
    </TestContainer>
  );
}

export default Test;
