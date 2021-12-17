import SummaryWrapper from "../components/dashboard/SummaryWrapper";
import styled from "styled-components";
import { theme } from "styled-tools";
import ChartWrapper from "components/dashboard/ChartWrapper";
import UserListWrapper from "components/UserListWrapper";

export default function Dashboard() {
  return (
    <StContent>
      <SummaryWrapper />
      <StRowWrapper>
        <StChartWrapper>
          <ChartWrapper />
        </StChartWrapper>
        <StUserWrapper>
          <UserListWrapper />
        </StUserWrapper>
      </StRowWrapper>
    </StContent>
  );
}

const StContent = styled.main`
  width: 150rem;
`;

const StRowWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StChartWrapper = styled.section`
  width: 99.2rem;
  background-color: ${theme("colors.pointWhite")};
`;

const StUserWrapper = styled.section`
  width: 47.1rem;
  height: 95.4rem;
  background-color: ${theme("colors.pointWhite")};
`;
