import styled from "styled-components";
import { theme } from "styled-tools";

import { User } from "utils/tempData";

export default function UserInfo(props: { userInfo: User }) {
  const userInfo = props.userInfo;
  return (
    <StWrapper>
      <img src={userInfo.image} alt="userThumbNail-1" />
      <StInfoWrapper>
        <span>{userInfo.nickname}</span>
        {userInfo.email}
      </StInfoWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.7rem;

  & > img {
    width: 20rem;
    height: 20rem;
  }
`;

const StInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  ${theme("fonts.korTitle")}
  font-weight: bold;

  span::after {
    content: "|";
    margin: 0 2.5rem;
  }
`;
