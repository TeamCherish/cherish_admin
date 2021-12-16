import { useState } from "react";

import styled from "styled-components";

export default function UserList() {
  const [pageCnt, setPageCnt] = useState(1);

  const goPrevPage = () => {
    if (pageCnt <= 1) return;
    setPageCnt((cnt) => cnt - 1);
  };

  const goNextPage = () => {
    setPageCnt((cnt) => cnt + 1);
  };

  return (
    <Test>
      <StUserListWrapper>
        <StPageWrapper>
          <StH3>사용자 목록</StH3>
          <div>
            <button onClick={goPrevPage}>sdaf</button>
            <StPageCnt>{pageCnt}</StPageCnt>
            <button onClick={goNextPage}>asdf</button>
          </div>
        </StPageWrapper>
        <ul></ul>
        {/* API map 돌리기 */}
      </StUserListWrapper>
    </Test>
  );
}
const Test = styled.section`
  width: 47.1rem;
  height: 92.4rem;
`;

const StUserListWrapper = styled.article`
  width: 100%;
  height: 100%;
  padding: 3.8rem;
`;

const StPageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StH3 = styled.h3`
  font-size: 2rem;
  weight: 700;
`;

const StPageCnt = styled.span`
  font-size: 1.8rem;
`;
