import styled from "styled-components";
import { UserInfo, PlantList } from "..";

export default function UserDetail() {
  return (
    <StWrapper>
      <UserInfo />
      <PlantList />
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 18rem 4.7rem 10rem 4.7rem; */
`;
