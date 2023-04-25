import "./quizInfoView.scss";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";
import Time from "../timerView/TimeView";
import { LinearProgress } from "@mui/material";
function QuizInfoView(props) {
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
  return (
    <div className="quizInfo">
      <div className="quiz">
        <div className="left">{topicIcon(props.current.category)}</div>
        <div className="right">
          <div className="row">
            <h5>Topic:</h5>
            <h5>{props.current.category}</h5>
          </div>
          <div className="row">
            <h5>Difficulty:</h5>
            <h5>{props.current.difficulty}</h5>
          </div>
        </div>
      </div>
      <div className="process">
        <LinearProgress
          className="bar"
          variant="determinate"
          value={props.progress}
        />
      </div>
      <div className="time">
        <Time start={props.takeQuiz} />
      </div>
    </div>
  );
}

export default QuizInfoView;
