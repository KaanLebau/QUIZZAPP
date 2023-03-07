import "./pieChartView.scss";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart(props) {
  const chartLabel = Object.keys(props.chartData);
  const data = Object.values(props.chartData);
  const input = {
    labels: chartLabel,
    datasets: [
      {
        data: data,
        borderColor: ["#00fff5", "#393e46", "#222831", "#00ADb5"],
        backgroundColor: [
          "rgb(60,185,159,0.1)",
          "rgb(196,88,80,0.1)",
          "rgb(255,165,0,0.1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    aspectRatio: 1.5,

    plugins: {
      title: {
        display: true,
        text: props.chartTitle,
        color: "#dbd8e3",
        font: {
          size: 20,
        },
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#dbd8e3",
          font: {
            size: 14,
          },
        },
      },
    },
  };
  return <Pie className="pieChart" data={input} options={options} />;
}

export default PieChart;
