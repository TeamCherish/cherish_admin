import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Chart } from "../";

import { client } from "utils/api";

export interface JoinInfo {
  date: number;
  joinCount: number;
}

export interface WaterInfo {
  date: number;
  waterCount: number;
}

export default function ChartWrapper() {
  const today = new Date();

  const [joinInfoList, setJoinInfoList] = useState<JoinInfo[]>([]);
  const [waterInfoList, setWaterInfoList] = useState<WaterInfo[]>([]);
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  useEffect(() => {
    (async function () {
      const { data: joinResponse } = await client.get(
        `/user/per-month-report`,
        {
          params: {
            year: selectedYear,
            month: selectedMonth,
          },
        }
      );
      setJoinInfoList(joinResponse.data);
      const { data: waterResponse } = await client.get(
        `/contact/per-month-report`,
        {
          params: {
            year: selectedYear,
            month: selectedMonth,
          },
        }
      );
      setWaterInfoList(waterResponse.data);
    })();
  }, [selectedMonth, selectedYear]);

  return (
    <StChartWrapper>
      <Chart title="일별 가입 사용자 증가 추이" infoList={joinInfoList} />
      <Chart title="누적 물주기 증가 추이" infoList={waterInfoList} />
    </StChartWrapper>
  );
}

const StChartWrapper = styled.section`
  width: 99.2rem;
  background-color: ${theme("colors.bgColor")};
  & > *:first-child {
    margin-bottom: 48px;
  }
`;
