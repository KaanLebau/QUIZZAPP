import "./chartPresenter.scss";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ChartPresenter(props) {
  const chartLabel = Object.keys(props.chartData.data);
  const data = Object.values(props.chartData.data);
  const input = {
    labels: chartLabel,
    datasets: [
      {
        data: data,
        borderColor: [
          "rgba(75, 192, 192)",
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "#00ADb5",
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgb(255,165,0,0.1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const barInput2 = {
    labels: chartLabel,
    datasets: [
      {
        data: {
          datasets: [
            {
              labels: ["Pass", "Failed"],
              data: data,
              backgroundColor: "rgba(75, 192, 192)",
              borderColor: "rgba(75,192,192, 0.2)",
              borderWidth: 1,
            },
          ],
        },
      },
    ],
  };
  const barInput1 = {
    labels: chartLabel[0],
    datasets: [
      {
        label: chartLabel[0],
        backgroundColor: "rgba(75, 192, 192)",
        borderColor: "rgba(75,192,192, 0.2)",
        data: data[0],
      },
      {
        label: chartLabel[1],
        backgroundColor: "rgba(255, 99, 132)",
        borderColor: "rgba(255,99,132, 0.2)",
        data: data[1],
      },
      {
        label: chartLabel[2],
        backgroundColor: "rgba(255, 99, 132)",
        borderColor: "rgba(255,99,132, 0.2)",
        data: data[2],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
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
      <div className="theChart">
        {props.chartData.chartType === "pie" ? (
          <Pie className="pieChart" data={input} options={options} />
        ) : (
          <Bar className="barChart" data={barInput1} options={options} />
        )}
      </div>
    </div>
  );
}

export default ChartPresenter;
//<Pie className="pieChart" data={input} options={options} />
