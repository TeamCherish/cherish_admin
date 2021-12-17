import DashboardSummary from "../components/dashboard/DashboardSummary";
import styled from "styled-components";
import { theme } from "styled-tools";
import ChartWrapper from "components/dashboard/ChartWrapper";
import UserListWrapper from "components/UserListWrapper";
import { joinUserIcon, totalUserIcon, totalPlantingIcon } from "../assets";

export default function Dashboard() {
  return (
    <StContent>
      <StSummaryWrapper>
        <DashboardSummary
          summaryIcon={joinUserIcon}
          summaryText="서비스 신규 이용자 수"
          dataNumber="10"
          dataVariation="+7"
        />
        <DashboardSummary
          summaryIcon={totalUserIcon}
          summaryText="서비스 누적 이용자 수"
          dataNumber="7,777"
          dataVariation="+7"
        />
        <DashboardSummary
          summaryIcon={totalPlantingIcon}
          summaryText="서비스 누적 수"
          dataNumber="7,777"
          dataVariation="+7"
        />
      </StSummaryWrapper>
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

const StSummaryWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4.8rem;
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
