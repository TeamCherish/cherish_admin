import DatePicker from "./DatePicker";
// import { theme } from "styled-tools";
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
// import { Line } from "react-chartjs-2";

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

export default function Chart(props: ChartProps) {
  const { title } = props;
  // const options = {
  //   responsive: true,
  //   interaction: {
  //     mode: "index" as const,
  //     intersect: false,
  //   },
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     title: {
  //       display: false,
  //     },
  //   },
  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //       },
  //     },
  //     y: {
  //       grid: {
  //         color: theme("colors.graphLineGray"),
  //       },
  //     },
  //   },
  // };
  return (
    <article>
      <h3>{title}</h3>
      <DatePicker />
    </article>
  );
}
