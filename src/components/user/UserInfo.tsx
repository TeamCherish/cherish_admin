import { useEffect } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

interface UserInfoProps {
  id: number;
  nickname: string;
  email: string;
  thumbNail?: string;
}

export default function UserInfo(props: { userInfo: UserInfoProps }) {
  const userInfo = props.userInfo;
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <StWrapper>
      {userInfo.thumbNail ? (
        <img src={userInfo.thumbNail} alt="userThumbNail" />
      ) : null}
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
