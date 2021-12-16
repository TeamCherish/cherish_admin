import { useState } from "react";
import { theme } from "styled-tools";

import styled from "styled-components";
import UserList from "./UserList";

import { ReactComponent as ArrowLeft } from "../assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowLeftActive } from "../assets/icons/arrowLeftActive.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/arrowRight.svg";
import { ReactComponent as ArrowRightActive } from "../assets/icons/arrowRightActive.svg";

export default function UserListWrapper() {
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
        <StTopWrapper>
          <StH3>사용자 목록</StH3>
          <StPageWrapper>
            {pageCnt === 1 ? (
              <ArrowLeft />
            ) : (
              <ArrowLeftActive onClick={goPrevPage} />
            )}
            <StPageCnt>{pageCnt}</StPageCnt>
            <ArrowRightActive onClick={goNextPage} />
          </StPageWrapper>
        </StTopWrapper>
        <UserList />
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

  background-color: ${theme("colors.bgWhite")};
`;

const StTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StH3 = styled.h3`
  font-size: 2rem;
  weight: 700;
`;

const StPageWrapper = styled.div`
  width: 6rem;
  display: flex;
  justify-content: space-between;
`;

const StPageCnt = styled.span`
  width: 1rem;
  font-size: 1.8rem;
`;
