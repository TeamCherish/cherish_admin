import { Outlet } from "react-router-dom";
import styled from "styled-components";

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
`;
