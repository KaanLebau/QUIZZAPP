import "./tabView.scss";
import SignalCellularAlt1BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt1BarOutlined";
import SignalCellularAlt2BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt2BarOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";

function TabView(props) {
  function topicIcon(topic) {
    switch (topic) {
      case "SQL":
        return <FaDatabase className="icon" />;
      case "Docker":
        return <FaDocker className="icon" />;
      case "Code":
        return <FaCode className="icon" />;
      case "Linux":
        return <FaLinux className="icon" />;
      default:
        break;
    }
  }
  return (
    <div className="tabView">
      <div className="category">
        <p>{props.data.topic}</p>
      </div>
      <div>{topicIcon(props.data.topic)}</div>
      <div>
        <p>Number of Questions</p>
        <p></p>
      </div>
    </div>
  );
}

export default TabView;
