import Summary from "./Summary";
import styled from "styled-components";
import { joinUserIcon, totalUserIcon, totalPlantingIcon } from "../../assets";

export default function SummaryWrapper() {
  return (
    <StSummaryWrapper>
      <Summary
        summaryIcon={joinUserIcon}
        summaryText="서비스 신규 이용자 수"
        dataNumber="10"
        dataVariation="+7"
      />
      <Summary
        summaryIcon={totalUserIcon}
        summaryText="서비스 누적 이용자 수"
        dataNumber="7,777"
        dataVariation="+7"
      />
      <Summary
        summaryIcon={totalPlantingIcon}
        summaryText="서비스 누적 수"
        dataNumber="7,777"
        dataVariation="+7"
      />
    </StSummaryWrapper>
  );
}

const StSummaryWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4.8rem;
`;
