import { useState } from "react";
import { theme } from "styled-tools";

import styled from "styled-components";
import UserList from "./UserList";

import { ArrowLeft, ArrowLeftActive, ArrowRight } from "../../assets";

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
    <StUserListWrapper>
      <StHeaderWrapper>
        <StH3>사용자 목록</StH3>
        <StPageWrapper>
          {pageCnt === 1 ? (
            <StArrowLeft />
          ) : (
            <ArrowLeftActive onClick={goPrevPage} />
          )}
          <StPageCnt>{pageCnt}</StPageCnt>
          <StArrowRight onClick={goNextPage} />
        </StPageWrapper>
      </StHeaderWrapper>
      <UserList pageCnt={pageCnt} />
    </StUserListWrapper>
  );
}

const StUserListWrapper = styled.article`
  width: 100%;
  height: 100%;
  padding: 3.8rem;

  background-color: ${theme("colors.bgWhite")};
`;

const StHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-bottom: 2.2rem;
`;

const StArrowLeft = styled(ArrowLeft)`
  height: 100%;
  text-anchor: middle;
  alignment-baseline: middle;
`;

const StArrowRight = styled(ArrowRight)`
  height: 100%;
  text-anchor: middle;
  alignment-baseline: middle;
`;

const StH3 = styled.h3`
  font-size: 2rem;
  weight: 700;

  ${theme("fonts.korBold")};
`;

const StPageWrapper = styled.div`
  width: 6rem;
  display: flex;
  justify-content: space-between;
`;

const StPageCnt = styled.span`
  width: 100%;
  text-align: center;
  font-size: 1.8rem;
`;
