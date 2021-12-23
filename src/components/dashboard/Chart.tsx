import { theme } from "styled-tools";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { DatePicker } from "../";
import { client } from "utils/api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  title: string;
}

interface JoinInfoByDate {
  date: number;
  joinCount: number;
}

export default function Chart(props: ChartProps) {
  const { title } = props;
  const JOIN_TITLE = "일별 가입 사용자 증가 추이";
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [joinInfoByDateList, setJoinInfoByDateList] = useState<
    JoinInfoByDate[]
  >([]);

  const pickDate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isSelected: boolean
  ) => {
    if (!isSelected && e.target instanceof HTMLButtonElement) {
      if (e.target.innerText.length > 2) {
        setSelectedYear(Number(e.target.innerText));
      } else {
        setSelectedMonth(Number(e.target.innerText));
      }
    }
  };

  useEffect(() => {
    (async function () {
      const { data } = await client.get("/user/per-month-report", {
        params: {
          year: selectedYear,
          month: selectedMonth,
        },
      });
      setJoinInfoByDateList(data.data);
    })();
  }, []);
  useEffect(() => {
    (async function () {
      console.log("selectedMonth", selectedMonth);
      console.log("selectedYear", selectedYear);
      const { data } = await client.get("/user/per-month-report", {
        params: {
          year: selectedYear,
          month: selectedMonth,
        },
      });
      setJoinInfoByDateList(data.data);
    })();
  }, [selectedYear, selectedMonth]);

  useEffect(
    () => console.log("join", joinInfoByDateList),
    [joinInfoByDateList]
  );

  const options = {
    responsive: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
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
  const labels = joinInfoByDateList.map((joinInfo) => joinInfo.date);
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: joinInfoByDateList.map((joinInfo) => joinInfo.joinCount),
        borderColor: title === JOIN_TITLE ? "#F1B0BC" : "#97CDBD",
        backgroundColor: title === JOIN_TITLE ? "#F1B0BC" : "#97CDBD",
      },
    ],
  };
  return (
    <StChart>
      <StTopWrapper>
        <StTitle>{title}</StTitle>
        <DatePicker
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          onClickDate={pickDate}
        />
      </StTopWrapper>
      <StBottomWrapper>
        <Line options={options} data={data} width="894px" height="320px" />
      </StBottomWrapper>
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
`;

const StTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4.2rem;
  padding-top: 2.6rem;
  width: 93rem;
`;

const StBottomWrapper = styled.div`
  width: 89.4rem;
  height: 32rem;
`;

const StTitle = styled.h3`
  ${theme("fonts.korBold")};
  font-weight: 700;
`;
