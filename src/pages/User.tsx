import styled from "styled-components";

import { UserDetail } from "components";

export default function User() {
  return (
    <StWrapper>
      userPage
      <UserDetail />
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
