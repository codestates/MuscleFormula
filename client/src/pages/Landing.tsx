import axios from "axios";
import React from "react";
import { Mobile, PC } from "../mediaQuery";
import styled from "styled-components";
import type { RootState, AppDispatch } from "../store";
const qs = require("qs");

// const fetcMore = async () => {
//   const target = page ? fetcMoreTrigger : app;
//   target.classList.add("loading");
// };

export const loading = styled.div`
  height: 100vh;
  > #app.loading:after {
    content: "...로딩중...";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const LoginPC = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

export const LoginMobile = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;
export default function Landing() {
  console.log("랜딩페이지");
  /**
   * data.data.exerciseInfo
   */
  return (
    <div className="Loading">
      <div className="Container">
        <PC>
          <LoginPC>
            <section>
              <aside>Header</aside>
            </section>
            <section>
              <aside>Header</aside>
            </section>
            <section>
              <aside>Header</aside>
            </section>
            <section>
              <aside>Header</aside>
            </section>
            <section>
              <aside>Header</aside>
            </section>
          </LoginPC>
        </PC>
        <Mobile>
          <LoginMobile></LoginMobile>
        </Mobile>
      </div>
    </div>
  );
}
