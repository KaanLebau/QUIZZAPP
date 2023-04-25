import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";
import PieChartView from "../pieChartView/PieChartView";

import "./topicCardView.scss";

function TopicCardView(props) {
  return (
    <div className="topicCard">
      <div className="cardData">
        <h1>{props.data.topic}</h1>
        <div className="charts">
          <div className="chart">
            <PieChartView
              chartData={props.data.resultData.data}
              chartTitle={props.data.resultData.title}
            />
          </div>
          <div className="chart">
            <PieChartView
              chartData={props.data.answerData.data}
              chartTitle={props.data.answerData.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicCardView;

/*
<DiffifultieSummaryView
            data={props.data.topic.easy}
            difficulty={"Easy"}
          />
          <DiffifultieSummaryView
            data={props.data.topic.medium}
            difficulty={"Medium"}
          />
          <DiffifultieSummaryView
            data={props.data.topic.hard}
            difficulty={"Hard"}
          />

*/
