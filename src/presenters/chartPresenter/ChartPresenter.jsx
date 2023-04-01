import "./chartPresenter.scss";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ChartPresenter(props) {
  const chartLabel = Object.keys(props.chartData.data);
  const data = Object.values(props.chartData.data);
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
    plugins: {
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

  return (
    <div className="chartpresenter">
      <div className="chartTitle">{props.chartData.title}</div>
      <div className="chart">
        {props.chartData.chartType === "pie" ? (
          <Pie className="pieChart" data={input} options={options} />
        ) : (
          <p>Bar chart</p>
        )}
      </div>
    </div>
  );
}

export default ChartPresenter;
//<Pie className="pieChart" data={input} options={options} />
