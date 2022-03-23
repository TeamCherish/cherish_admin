import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Chart } from "../";

import { client } from "utils/api";
import { useRecoilValue } from "recoil";
import { joinSelectedDateAtom, waterSelectedDateAtom } from "states";

export interface JoinInfo {
  date: number;
  joinCount: number;
}
export interface WaterInfo {
  date: number;
  waterCount: number;
}

export default function ChartWrapper() {
  const [joinInfoList, setJoinInfoList] = useState<JoinInfo[]>([]);
  const [waterInfoList, setWaterInfoList] = useState<WaterInfo[]>([]);
  const joinSelectedDate = useRecoilValue(joinSelectedDateAtom);
  const waterSelectedDate = useRecoilValue(waterSelectedDateAtom);

  useEffect(() => {
    (async function () {
      const { data: joinResponse } = await client.get(
        `/user/per-month-report`,
        {
          params: {
            year: joinSelectedDate.year,
            month: joinSelectedDate.month,
          },
        }
      );
      setJoinInfoList(joinResponse.data);
    })();
  }, [joinSelectedDate]);
  useEffect(() => {
    (async function () {
      const { data: waterResponse } = await client.get(
        `/contact/per-month-report`,
        {
          params: {
            year: waterSelectedDate.year,
            month: waterSelectedDate.month,
          },
        }
      );
      setWaterInfoList(waterResponse.data);
    })();
  }, [waterSelectedDate]);

  return (
    <StChartWrapper>
      <Chart
        title="일별 가입 사용자 증가 추이"
        infoList={joinInfoList}
        selectedDateAtom={joinSelectedDateAtom}
      />
      <Chart
        title="누적 물주기 증가 추이"
        infoList={waterInfoList}
        selectedDateAtom={waterSelectedDateAtom}
      />
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
