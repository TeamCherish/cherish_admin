import { useState } from "react";
import { theme } from "styled-tools";

import styled from "styled-components";
import UserList from "./UserList";

import { ArrowLeft, ArrowRight } from "../../assets";

export default function UserListWrapper() {
  const MAX_PAGE = 5;
  const [pageCnt, setPageCnt] = useState(1);
  const [isLeftActive, setIsLeftActive] = useState(true);
  const [isRightActive, setIsRightActive] = useState(true);

  const goPrevPage = () => {
    if (!isLeftActive) return;

    const newCnt = pageCnt - 1;
    setPageCnt(newCnt);
    if (newCnt <= 1) setIsLeftActive(false);
    if (!isRightActive && newCnt < MAX_PAGE) setIsRightActive(true);
  };

  const goNextPage = () => {
    if (!isRightActive) return;

    const newCnt = pageCnt + 1;
    setPageCnt(newCnt);
    if (!isLeftActive && newCnt > 1) setIsLeftActive(true);
    if (newCnt >= MAX_PAGE) setIsRightActive(false);
  };

  return (
    <StUserListWrapper>
      <StHeaderWrapper>
        <StH3>사용자 목록</StH3>
        <StPageWrapper>
          <StArrowLeft onClick={goPrevPage} isActive={isLeftActive} />
          <StPageCnt>{pageCnt}</StPageCnt>
          <StArrowRight onClick={goNextPage} isActive={isRightActive} />
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

const StArrowLeft = styled(ArrowLeft)<{ isActive: boolean }>`
  height: 100%;
  text-anchor: middle;
  alignment-baseline: middle;
  fill: ${(props) =>
    props.isActive ? theme("colors.textBlack") : theme("colors.textGray")};
`;

const StArrowRight = styled(ArrowRight)<{ isActive: boolean }>`
  height: 100%;
  text-anchor: middle;
  alignment-baseline: middle;
  fill: ${(props) =>
    props.isActive ? theme("colors.textBlack") : theme("colors.textGray")};
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
