import ReactSlick from "./ReactSlick";
import styled from "styled-components";
import PhotoUploader from "../components/PhotoUploader";
import { useState } from "react";

export const TestContainer = styled.div`
  padding-top: 5rem;
`
function Test() {
  const [photo, setPhoto] = useState({
    file: [],
    previewURL: "",
  });
  return (
    <TestContainer>
      <PhotoUploader photo={photo} setPhoto={setPhoto}/>
    </TestContainer>
  );
}

export default Test;
