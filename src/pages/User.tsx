import styled from "styled-components";
import UserListWrapper from "components/UserListWrapper";

import { UserDetail } from "components";

export default function User() {
  return (
    <StWrapper>
      <UserListWrapper />
      <UserDetail />
    </StWrapper>
  );
}

const StWrapper = styled.main`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 150rem;
  height: 107rem;
  gap: 4.8rem;
`;
