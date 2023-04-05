import "./chartPresenter.scss";
import { Pie, Bar, Radar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ChartPresenter(props) {
  const chartLabel = Object.keys(props.chartData.data);
  const data = Object.values(props.chartData.data);

  const barInput1 = {
    labels: props.chartData.labels,
    datasets: [
      {
        label: chartLabel,
        backgroundColor: "rgba(75, 192, 192)",
        borderColor: "rgba(75,192,192, 0.2)",
        data: data[0],
      },
    ],
  };
  const options = {
    elements: {
      borderColor: "#dbd8e3",
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        color: "#dbd8e3",
        labels: {
          color: "#dbd8e3",
          font: {
            size: 14,
          },
        },
      },
    },
  };
  function charSelector(topic) {
    switch (topic) {
      case "pie":
        const pieInput = {
          labels: props.chartData.labels,
          datasets: [
            {
              data: data,
              borderColor: [
                "rgba(75, 192, 192)",
                "rgba(255, 99, 132)",
                "rgba(255, 159, 64)",
                "rgb(255,165,0,0.1)",
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
        return <Pie className="pieChart" data={pieInput} options={options} />;
      case "bar":
        const barInput = {
          labels: chartLabel,
          datasets: [
            {
              label: chartLabel,
              data: data,
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(75, 192, 192)",
                "rgb(255, 159, 64)",
                "rgb(255, 99, 132)",
                "rgb(255, 205, 86)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        };
        return <Bar className="barChart" data={barInput} options={options} />;
      case "radar":
        const radarInput = {
          labels: props.chartData.labels,
          datasets: [
            {
              label: chartLabel[0],
              data: data[0],
              fill: true,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgb(75, 192, 192)",
              pointBackgroundColor: "rgb(75, 192, 192)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(75, 192, 192)",
            },
            {
              label: chartLabel[1],
              data: data[1],
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(255, 99, 132)",
            },
          ],
        };
        return (
          <Radar className="barChart" data={radarInput} options={options} />
        );
      case "doughnut":
        const doughnutData = {
          labels: props.chartData.labels,
          datasets: [
            {
              label: props.chartData.title,
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
              hoverOffset: 4,
            },
          ],
        };
        return (
          <Doughnut
            className="pieChart"
            data={doughnutData}
            options={options}
          />
        );

      default:
        break;
    }
  }
  return (
    <div className="chartpresenter">
      <div className="theChart">{charSelector(props.chartData.chartType)}</div>
    </div>
  );
}

export default ChartPresenter;
//<Pie className="pieChart" data={input} options={options} />
