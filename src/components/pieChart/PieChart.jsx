import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart(props) {
  const input = {
    labels: ["pass", "failed"],
    datasets: [
      {
        label: "Succes",
        data: [
          {
            label: "pass",
            data: 5,
          },
        ],
      },
    ],
  };
  return <Pie data={input} />;
}

export default PieChart;
