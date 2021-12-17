import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { theme } from "styled-tools";
import Header from "../components/common/Header";

export default function Main() {
  return (
    <StWrapper>
      <Header />
      <Outlet />
    </StWrapper>
  );
}

const StWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${theme("colors.bgColor")};
`;
