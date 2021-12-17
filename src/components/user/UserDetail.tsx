import { useEffect, useState } from "react";
import styled from "styled-components";

import { getUserInfo } from "utils";
import { User } from "utils/tempData";
import { PlantList, UserInfo } from "..";
import { plant1 } from "assets";
import { theme } from "styled-tools";

const TEMP_USER_ID: number = 5;
const INITIAL_PROPS: User = {
  id: 0,
  image: "",
  name: "temp",
  email: "temp@temp.com",
  phoneNum: "0000",
  contactCount: "00",
};

export default function UserDetail() {
  const [userInfo, setUserInfo] = useState<User>(INITIAL_PROPS);

  useEffect(() => {
    (async function () {
      const userData: User = await getUserInfo(TEMP_USER_ID);
      setUserInfo({ ...userData, image: plant1 });
    })();
  });

  return (
    <StWrapper>
      <UserInfo userInfo={userInfo} />
      <PlantList />
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;
  padding: 14rem 4.7rem 8rem 4.7rem;
  background-color: ${theme("colors.bgWhite")};
`;
