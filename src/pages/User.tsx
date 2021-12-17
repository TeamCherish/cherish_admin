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
  justify-content: center;
  padding-top: 2rem;
  width: 150rem;
  gap: 4.8rem;
`;
