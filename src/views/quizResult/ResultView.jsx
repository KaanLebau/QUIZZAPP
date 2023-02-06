import "./resultView.scss";
import SignalCellularAlt1BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt1BarOutlined";
import SignalCellularAlt2BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt2BarOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";
import PieChart from "../../components/pieChart/PieChart";

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
      <div className="top">
        <div className="main" title={props.result.category}>
          {topicIcon(props.result.category)}
          <h1>{props.result.category}</h1>
        </div>
        <div className="main" title={props.result.difficultie}>
          {Diff(props.result.difficultie)}
          <h1>{props.result.difficultie}</h1>
        </div>
        {props.result.pass === 1 ? (
          <div className="main" title="Pass">
            <TrendingUpIcon className="icon" />
            <h1>Pass</h1>
          </div>
        ) : (
          <div className="main" title="Faild">
            <TrendingDownIcon className="icon" />
            <h1>Faild</h1>
          </div>
        )}
      </div>
      <div className="middle">
        <PieChart chartData={props.chartData} chartTitle={props.chartTitle}/>
      </div>
      <div className="bottom">
        <button title="To Dashboard" onClick={props.submit}>
          To Dashboard
        </button>
      </div>
    </div>
  );
}

export default ResultView;
