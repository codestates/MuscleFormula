import styled from "styled-components";
import labelStarPoint from "../functions/labelStarPoint";
import AlertModal from "../components/Modals/AlertModal";
export const TestContainer = styled.div`
  padding-top: 5rem;
`
function Test() {
  return (
    <TestContainer>
      {AlertModal('운동명을 입력해주세요')}
    </TestContainer>
  );
}

export default Test;
