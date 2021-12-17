import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "utils/api";
import styled from "styled-components";
import { logo, idIcon, pwIcon } from "assets";
import { theme } from "styled-tools";

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
        <img src={logo} alt="logo" />
        <span>관리자 로그인</span>
      </StHeader>
      <StInput>
        <StId>
          <img src={idIcon} alt="id" />
        </StId>
      </StInput>
      <StInput>
        <StPassword>
          <img src={pwIcon} alt="pw" />
        </StPassword>
      </StInput>
      <StLoginButton>
        <Link to="/main">로그인</Link>
      </StLoginButton>
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
    font-family: ${theme("fonts.engBold")};
  }
`;

const StInput = styled.article`
  border-radius: 0.4rem;
  border: 1px solid ${theme("colors.chartLineGray")};
  background-color: ${theme("colors.pointWhite")};
  width: 36.9rem;
  height: 4.5rem;
  margin-bottom: 2.7rem;
`;

const StId = styled.div`
  align-items: center;

  & > img {
    width: 1.9rem;
    margin: 1.2rem 0 1.2rem 2.3rem;
  }
`;

const StPassword = styled.div`
  align-items: center;

  & > img {
    width: 1.6rem;
    margin: 1.2rem 0 1.2rem 2.3rem;
  }
`;

const StLoginButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme("colors.mainColor")};
  border-radius: 0.4rem;
  width: 36.9rem;
  height: 4.5rem;
  margin-top: 1.2rem;

  & > a {
    text-align: center;
    font-family: ${theme("fonts.korBold")};
    color: ${theme("colors.pointWhite")};
  }
`;
