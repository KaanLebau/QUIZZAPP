import "./resultView.scss";
import SignalCellularAlt1BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt1BarOutlined";
import SignalCellularAlt2BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt2BarOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";
//import PieChart from "../pieChartView/PieChartView";

function ResultView(props) {
  function topicIcon(topic) {
    switch (topic) {
      case "SQL":
        return <FaDatabase className="icon" />;
      case "Docker":
        return <FaDocker className="icon" />;
      case "Code":
        return <FaCode className="icon" />;
      case "linux":
        return <FaLinux className="icon" />;
      default:
        break;
    }
  }
  function Diff(dif) {
    switch (dif) {
      case "Easy":
        return <SignalCellularAlt1BarOutlinedIcon className="icon" />;
      case "Medium":
        return <SignalCellularAlt2BarOutlinedIcon className="icon" />;
      case "Hard":
        return <SignalCellularAltOutlinedIcon className="icon" />;
      default:
        break;
    }
  }
  return (
    <div className="result">
      <div className="main" title={props.result.category}>
        {topicIcon(props.result.category)}
        <h1>{props.result.category}</h1>
      </div>
      <div className="main" title={props.result.difficulty}>
        {Diff(props.result.difficulty)}
        <h1>{props.result.difficulty}</h1>
      </div>
      {props.result.passed ? (
        <div className="main" title="Pass">
          <TrendingUpIcon className="icon" />
          <h1>Passed</h1>
        </div>
      ) : (
        <div className="main" title="Failed">
          <TrendingDownIcon className="icon" />
          <h1>Failed</h1>
        </div>
      )}
    </div>
  );
}

export default ResultView;
