import ReactSlick from "./ReactSlick";
import styled from "styled-components";
import { ModalTest } from "./ModalTest";
import { useState } from "react";
import QuitModal from "../components/Modals/QuitModal";

export const TestContainer = styled.div`
  padding-top: 5rem;
`
function Test() {
  localStorage.setItem('예쁜신발', '123');
  localStorage.setItem('예쁜신발', '234');
  return (
    <TestContainer>
    </TestContainer>
  );
}

export default Test;
