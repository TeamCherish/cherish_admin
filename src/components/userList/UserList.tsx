import styled from "styled-components";
import { theme } from "styled-tools";

import { User } from "utils/tempData";
import { plant1, plant2, plant3, plant4, plant5 } from "assets";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userDatum } from "states";

export default function UserList(props: { userList: User[] }) {
  const { userList } = props;
  const plantImages = [plant1, plant2, plant3, plant4, plant5];
  const navigate = useNavigate();

  const setUserDatum = useSetRecoilState(userDatum);

  const getRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 4);
    return randomNum;
  };

  const navigateUserPage = (datum: User, image: string) => {
    navigate(`/main/user`);
    setUserDatum({
      id: datum.id,
      nickname: datum.nickname,
      email: datum.email,
      thumbNail: image,
    });
  };

  return (
    <StUserLists>
      {userList &&
        userList.map((userInfo) => {
          const userThumbNail = plantImages[getRandomNum()];
          return (
            <StUserList
              title={`유저 아이디: ${userInfo.id}`}
              key={`user-${userInfo.id}`}
              onClick={() => navigateUserPage(userInfo, userThumbNail)}
            >
              <img src={userThumbNail} alt="사용자 이미지" />
              <StUserName title={`닉네임: ${userInfo.nickname}`}>
                {userInfo.nickname}
              </StUserName>
              <StUserEmail title={`이메일: ${userInfo.email}`}>
                {userInfo.email}
              </StUserEmail>
              <StUserPhone title={`핸드폰번호: ${userInfo.phone}`}>
                {userInfo.phone}
              </StUserPhone>
              <StUserContactCnt title={`물주기 총 횟수: ${userInfo.count}`}>
                {userInfo.count}
              </StUserContactCnt>
            </StUserList>
          );
        })}
    </StUserLists>
  );
}

const StUserLists = styled.ul`
  height: calc(100% - 3.8rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${theme("fonts.korRegular")}

  & > * {
    &:hover {
      ${theme("fonts.korRegularBold")}
    }
  }
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
