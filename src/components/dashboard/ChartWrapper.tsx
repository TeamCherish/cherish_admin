import styled from "styled-components";
import Chart from "./Chart";

export default function ChartWrapper() {
  return (
    <StChartWrapper>
      <Chart title="일별 가입 사용자 증가 추이" />
      <Chart title="누적 물주기 증가 추이" />
    </StChartWrapper>
  );
}

const StChartWrapper = styled.section`
  width: 99.2rem;
  & > *:first-child {
    margin-bottom: 48px;
  }
`;