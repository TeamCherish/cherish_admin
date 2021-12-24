import styled from "styled-components";
import UserListWrapper from "components/common/UserListWrapper";

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
  gap: 4.8rem;
  padding-bottom: 5rem;
  width: 150rem;
`;
