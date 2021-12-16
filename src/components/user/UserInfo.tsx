import { useEffect, useState } from "react";
import styled from "styled-components";

import { plant1 } from "assets";
import { getUserInfo } from "utils";
import { User } from "utils/tempData";
import { theme } from "styled-tools";

const TEMP_USER_ID = 5;

export default function UserInfo() {
  const [userInfo, setUserInfo] = useState<User>({
    id: 1,
    name: "01짱구엄마",
    email: "temp@temp.com",
    phoneNum: "0000",
    contactCount: "00",
  });

  useEffect(() => {
    (async function () {
      const data: User = await getUserInfo(TEMP_USER_ID);
      setUserInfo(data);
    })();
  });

  useEffect(() => {
    console.log(`userInfo`, userInfo);
  }, [userInfo]);

  return (
    <StWrapper>
      <img src={plant1} alt="userThumbNail-1" />
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
