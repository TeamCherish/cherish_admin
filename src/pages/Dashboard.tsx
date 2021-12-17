import DashboardSummary from "components/DashboardSummary";
import styled from "styled-components";

import { joinUserIcon, totalUserIcon, totalPlantingIcon } from "../assets";

export default function Dashboard() {
  return (
    <StContent>
      <StSummaryWrapper>
        <DashboardSummary
          SummaryIcon={joinUserIcon}
          SummaryText="서비스 신규 이용자 수"
          DataNumber="10"
          DataVariation="+7"
        />
        <DashboardSummary
          SummaryIcon={totalUserIcon}
          SummaryText="서비스 누적 이용자 수"
          DataNumber="7,777"
          DataVariation="+7"
        />
        <DashboardSummary
          SummaryIcon={totalPlantingIcon}
          SummaryText="서비스 누적 수"
          DataNumber="7,777"
          DataVariation="+7"
        />
      </StSummaryWrapper>
    </StContent>
  );
}

const StContent = styled.main`
  width: 151.1rem;
`;

const StSummaryWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
