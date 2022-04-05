import styled from "styled-components";
import { UpperTab } from "./TabTest";

export const TestContainer = styled.div`
  padding-top: 5rem;
`
function Test() {
  return (
    <TestContainer>
      <UpperTab/>
    </TestContainer>
  );
}

export default Test;
