import { useState, useEffect } from "react";
// import { getUserList } from "utils";
import { User } from "utils/tempData";
import { client } from "utils/api";
import { theme } from "styled-tools";
import { plant1, plant2, plant3, plant4, plant5 } from "assets";

import styled from "styled-components";

export default function UserList(props: { pageCnt: number }) {
  const [userList, setUserList] = useState<User[]>([]);
  const plantImages = [plant1, plant2, plant3, plant4, plant5];

  const getRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 4);
    return randomNum;
  };

  useEffect(() => {
    console.log(`pageCnt`, props.pageCnt);
    (async function () {
      const data: User[] = await client.get("/user", {
        params: {
          offset: props.pageCnt,
          count: 20,
        },
      });
      setUserList(data);
    })();
  }, [props.pageCnt]);

  return (
    <StUserLists>
      {userList.map((userInfo) => (
        <StUserList>
          <img src={plantImages[getRandomNum()]} alt="사용자 이미지" />
          <StUserName>{userInfo.nickname}</StUserName>
          <StUserEmail>{userInfo.email}</StUserEmail>
          <StUserPhone>{userInfo.phone}</StUserPhone>
          <StUserContactCnt>{userInfo.count}</StUserContactCnt>
        </StUserList>
      ))}
    </StUserLists>
  );
}

const StUserLists = styled.ul`
  height: calc(100% - 3.8rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${theme("fonts.korRegular")}
`;

const StUserList = styled.li`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  & > img {
    width: 2.8rem;
    height: 2.8rem;
    margin-right: 0.7rem;
  }
  & > span {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StUserName = styled.span`
  width: 6.4rem;
  margin-right: 2.6rem;
`;

const StUserEmail = styled.span`
  width: 15rem;
  margin-right: 3rem;
`;

const StUserPhone = styled.span`
  margin-right: 2.8rem;
`;
const StUserContactCnt = styled.span`
  flex: 1;
`;
