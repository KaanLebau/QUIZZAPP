import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";
import PieChart from "../../components/pieChart/PieChart";
import DataWidget from "../../widgets/dataWidget/DataWidget";
import RateWidget from "../../widgets/rateWidget/RateWidget";
import DiffifultieSummaryView from "../difficultieSummaryView/DiffifultieSummaryView";

import "./topicCardView.scss";

function TopicCardView(props) {
  return (
    <div className="topicCard">
      <div className="bottom">
        <h1>{props.data.topic}</h1>
        <div className="charts">
          <div className="chart">
            <PieChart
              chartData={props.data.resultData.data}
              chartTitle={props.data.resultData.title}
            />
          </div>
          <div className="chart">
            <PieChart
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
            difficultie={"Easy"}
          />
          <DiffifultieSummaryView
            data={props.data.topic.medium}
            difficultie={"Medium"}
          />
          <DiffifultieSummaryView
            data={props.data.topic.hard}
            difficultie={"Hard"}
          />

*/
