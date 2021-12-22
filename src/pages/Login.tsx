import { useEffect, useState } from "react";

import styled from "styled-components";
import { theme } from "styled-tools";
import { client } from "utils/api";
import { logo } from "assets";
import LoginWrapper from "components/LoginWrapper";



export default function Login() {
  const [temp, setTemp] = useState();

  const fetch = async () => {
    const data: any = client.get("/contact");
    setTemp(data);
  };
  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    console.log(temp);
  }, [temp]);

  return (
    <StWrapper>
      <StHeader>
        <img src={logo} alt="로고" />
        <span>관리자 로그인</span>
      </StHeader>
      <LoginWrapper />
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const StHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5.1rem;

  & > img {
    filter: drop-shadow(0.2rem 0.3rem 0.8rem rgba(0, 0, 0, 0.25));
    width: 14.4rem;
    margin-bottom: 5.3rem;
  }

  & > span {
    ${theme("fonts.engBold")};
  }
`;

