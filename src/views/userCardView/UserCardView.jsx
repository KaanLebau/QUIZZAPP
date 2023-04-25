import "./userCardView.scss";
import React, { useEffect } from "react";
import PieChartView from "../pieChartView/PieChartView";
import { useState } from "react";
import InfoWidget from "../infoWidgetView/InfoWidgetView";

function UserCardView(props) {
  const [active, setActive] = useState(0);
  const [chartData, setChartData] = useState(props.data.topicDistributionData);
  function update(input) {
    switch (input) {
      case "0":
        setChartData(props.data.topicDistributionData);
        break;
      case "1":
        setChartData(props.data.difficultyDistributionData);
        break;
      case "2":
        setChartData(props.data.resultData);
        break;
      case "3":
        setChartData(props.data.answerData);
        break;

      default:
        break;
    }
  }

  function handelTab(e) {
    setActive(e);
  }
  useEffect(() => {
    update(active);
  }, [active]);
  return (
    <div className="userCard">
      <div className="userData">
        <InfoWidget title={"Username"} user={props.data.name} />
        <InfoWidget title={"Display"} user={props.data.displayName} />
      </div>
      <div className="charts">
        <div className="tabs">
          <span
            className={active !== "0" ? "theTab" : "selected"}
            title="Topic"
            value="0"
            id={0}
            onClick={(e) => setActive(e.target.id)}
          >
            Category
          </span>
          <span
            className={active !== "1" ? "theTab" : "selected"}
            title="Difficulty"
            id={1}
            onClick={(e) => handelTab(e.target.id)}
          >
            Difficulty
          </span>
          <span
            className={active !== "2" ? "theTab" : "selected"}
            title="Result"
            id={2}
            onClick={(e) => handelTab(e.target.id)}
          >
            Result
          </span>
          <span
            className={active !== "3" ? "theTab" : "selected"}
            title="Answer"
            id={3}
            onClick={(e) => handelTab(e.target.id)}
          >
            Answer
          </span>
        </div>
        <div className="chart">
          <PieChartView
            chartData={chartData.data}
            chartTitle={chartData.title}
          />
        </div>
        <div className="theTab"></div>
      </div>
    </div>
  );
}

export default UserCardView;
