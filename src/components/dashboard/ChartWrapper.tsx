import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import { Chart } from "../";

import { client } from "utils/api";
import { useRecoilValue } from "recoil";
import {
  joinSelectedDateAtom,
  SelectedDate,
  waterSelectedDateAtom,
} from "states";

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

  const getInfoList = async (
    selectedDate: SelectedDate,
    infoType: string,
    setInfoList:
      | React.Dispatch<React.SetStateAction<JoinInfo[]>>
      | React.Dispatch<React.SetStateAction<WaterInfo[]>>
  ) => {
    const { data } = await client.get(`/${infoType}/per-month-report`, {
      params: {
        year: selectedDate.year,
        month: selectedDate.month,
      },
    });
    const lastDay = new Date(
      selectedDate.year,
      selectedDate.month,
      0
    ).getDate();
    const today = new Date();
    setInfoList(
      selectedDate.month === today.getMonth() + 1
        ? data.data.slice(0, today.getDate())
        : data.data.slice(0, lastDay)
    );
  };

  useEffect(() => {
    getInfoList(joinSelectedDate, "user", setJoinInfoList);
  }, [joinSelectedDate]);
  useEffect(() => {
    getInfoList(waterSelectedDate, "contact", setWaterInfoList);
  }, [waterSelectedDate]);

  return (
    <StChartWrapper>
      <Chart
        title="일별 가입 사용자 증가 추이"
        infoList={joinInfoList}
        selectedDateAtom={joinSelectedDateAtom}
        color="#F1B0BC"
      />
      <Chart
        title="누적 물주기 증가 추이"
        infoList={waterInfoList}
        selectedDateAtom={waterSelectedDateAtom}
        color="#97CDBD"
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
