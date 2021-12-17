import styled from "styled-components";
import { theme } from "styled-tools";

export default function DashboardSummary({
  SummaryIcon,
  SummaryText,
  DataNumber,
  DataVariation,
}) {
  return (
    <StSummaryBox>
      <StSummaryIcon src={SummaryIcon}></StSummaryIcon>
      <StSummaryText>
        <h3>{SummaryText}</h3>
        <StSummaryData>
          <StDataNumber>{DataNumber}</StDataNumber>
          <StDataVariation>{DataVariation}</StDataVariation>
        </StSummaryData>
      </StSummaryText>
    </StSummaryBox>
  );
}

const StSummaryBox = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme("colors.pointWhite")};
  width: 47.1rem;
  height: 17rem;
`;

const StSummaryIcon = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  margin: 3.9rem 3rem 3.9rem 3.9rem;
`;

const StSummaryText = styled.div`
  & > h3 {
    ${theme("fonts.korBold")};
    color: ${theme("colors.textBlack")};
  }
`;

const StSummaryData = styled.div`
  display: flex;
  ${theme("fonts.engBold")};
  margin-top: 1rem;
`;

const StDataNumber = styled.div`
  color: ${theme("colors.textBlack")};
  margin-right: 1rem;
`;

const StDataVariation = styled.div`
  color: ${theme("colors.textRed")};
`;
