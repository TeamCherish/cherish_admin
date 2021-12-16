import styled from "styled-components";
import UserList from "components/UserList";

export default function User() {
  return (
    <StWrapper>
      userPage
      <UserList />
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 150rem;
  height: 107rem;
  gap: 4.8rem;
`;
