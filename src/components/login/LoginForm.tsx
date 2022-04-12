import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { theme } from "styled-tools";
import { IdIcon, PwIcon } from "assets";
import { useState } from "react";

export default function LoginWrapper() {
  const [account, setAccount] = useState({ id: "", pwd: "" });
  const navigate = useNavigate();

  const checkIsAdmin = (e) => {
    e.preventDefault();
    console.log("account", account, process.env.REACT_APP_ADMIN_ID);
    if (
      account.id === `${process.env.REACT_APP_ADMIN_ID}` &&
      account.pwd === `${process.env.REACT_APP_ADMIN_PWD}`
    ) {
      navigate("/main/dashboard");
    }
  };

  return (
    <form onSubmit={checkIsAdmin}>
      <StInput>
        <IdIcon />
        <input
          id="id"
          value={account.id}
          placeholder="아이디를 입력해주세요"
          onChange={(e) =>
            setAccount((curr) => ({ ...curr, id: e.target.value }))
          }
        />
      </StInput>
      <StInput>
        <PwIcon />
        <input
          id="pw"
          type="password"
          value={account.pwd}
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) =>
            setAccount((curr) => ({ ...curr, pwd: e.target.value }))
          }
        />
      </StInput>
      <StLoginButton type="submit">로그인</StLoginButton>
    </form>
  );
}

const StInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  border: 1px solid ${theme("colors.chartLineGray")};
  background-color: ${theme("colors.pointWhite")};
  width: 36.9rem;
  height: 4.5rem;
  margin-bottom: 2.7rem;

  & > svg {
    width: 1.9rem;
    margin: 1.2rem 0 1.2rem 2rem;
  }

  & > input {
    margin-left: 1.2rem;
  }
`;

const StLoginButton = styled.button`
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
