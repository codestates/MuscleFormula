import ReactSlick from "./ReactSlick";
import styled from "styled-components";
import { ModalTest } from "./ModalTest";
import { useState } from "react";

export const TestContainer = styled.div`
  padding-top: 5rem;
`
function Test() {
  return (
    <TestContainer>
      <ModalTest/>
    </TestContainer>
  );
}

export default Test;
