import { theme } from "styled-tools";
import styled from "styled-components";
import { RecoilState } from "recoil";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { DatePicker } from "../";
import { JoinInfo, WaterInfo } from "./ChartWrapper";
import { SelectedDate } from "states";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

interface ChartProps {
  title: string;
  infoList: JoinInfo[] | WaterInfo[];
  selectedDateAtom: RecoilState<SelectedDate>;
  color: string;
}

export default function Chart(props: ChartProps) {
  const { title, infoList, selectedDateAtom, color } = props;

  const options = {
    responsive: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#E3E3E3",
        },
      },
    },
  };
  const labels = infoList.map((info) => info.date);
  const data = {
    labels,
    datasets: [
      {
        data: infoList.map((info) => {
          if ("joinCount" in info) {
            return info.joinCount;
          } else {
            return info.waterCount;
          }
        }),
        borderColor: color,
        backgroundColor: color,
      },
    ],
  };
  return (
    <StChart>
      <div>
        <h3>{title}</h3>
        <DatePicker selectedDateAtom={selectedDateAtom} />
      </div>
      <Line options={options} data={data} width="894px" height="320px" />
    </StChart>
  );
}

const StChart = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme("colors.bgWhite")};
  width: 100%;
  height: 45.3rem;
  & > *:first-child {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 4.2rem;
    padding-top: 2.6rem;
    width: 93rem;
    & > h3 {
      ${theme("fonts.korBold")};
      font-weight: 700;
    }
  }
  & > *:last-child {
    width: 89.4rem;
    height: 32rem;
  }
`;
