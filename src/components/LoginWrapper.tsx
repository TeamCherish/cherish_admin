import { Link } from "react-router-dom";

import styled from "styled-components";
import { theme } from "styled-tools";
import { IdIcon, PwIcon } from "assets";

export default function LoginWrapper() {
  return (
    <form>
      <label>아이디</label>
      <StInput>
        <IdIcon />
        <input id="id" placeholder="아이디를 입력해주세요" />
      </StInput>
      <label>패스워드</label>
      <StInput>
        <PwIcon />
        <input id="pw" type="password" placeholder="비밀번호를 입력해주세요" />
      </StInput>
      <StLoginButton>
        <Link to="/dashboard">로그인</Link>
      </StLoginButton>
    </form>
  )
}

const StInput = styled.div`
  display: flex;
  align-items: center; 
  border-radius: 0.4rem;
  border: 0.1rem solid ${theme("colors.chartLineGray")};
  background-color: ${theme("colors.pointWhite")};
  width: 36.9rem;
  height: 4.5rem;
  margin-top: 0.5rem;  
  margin-bottom: 2.7rem;
  
  & > svg {
    width: 1.9rem;
    margin: 1.2rem 0 1.2rem 2rem;
  }

  & > input {
    margin-left: 1.2rem;
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
    ${theme("fonts.korBold")};
    color: ${theme("colors.pointWhite")};
  }
`;




      