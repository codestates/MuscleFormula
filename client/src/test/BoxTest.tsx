import styled from "styled-components";
import { useState } from "react";

export const BoxType = styled.div`
  display: flex;
  flex-direction: column;
  > #editor {
    border: 1px solid grey;
    width: 50vw;
    height: 50vh;
  } 
  > textarea {
    border: 1px solid red;
    width: 50vw;
    height: 50vh;
    ;
  }
`

export default function BoxTest (){
  const [content, setContent] = useState<string|null>('');


  return (
    <BoxType>
      <div id="editor" contentEditable="true" onInput={(e)=> setContent(e.currentTarget.textContent)}>
      </div>
      <textarea>
      </textarea>
      {content}
    </BoxType>
  );
}