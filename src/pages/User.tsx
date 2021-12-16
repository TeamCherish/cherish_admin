import styled from "styled-components";
import UserListWrapper from "components/UserListWrapper";

export default function User() {
  return (
    <StWrapper>
      <UserListWrapper />
      userPage
    </StWrapper>
  );
}

const StWrapper = styled.main`
  width: 150rem;
  height: 107rem;
  gap: 4.8rem;
`;
