import styled from "styled-components";
import { theme } from "styled-tools";

import { User } from "utils/tempData";

export default function UserInfo(props: { userInfo: User }) {
  const userInfo = props.userInfo;
  return (
    <StWrapper>
      <img src={userInfo.image} alt="userThumbNail-1" />
      <StInfoWrapper>
        <span>{userInfo.name}</span>
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
`;

const StInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  ${theme("fonts.korTitleBold")}

  span::after {
    content: "|";
    margin: 0 2.5rem;
  }
`;
