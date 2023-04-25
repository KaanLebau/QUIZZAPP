import SignalCellularAlt1BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt1BarOutlined";
import SignalCellularAlt2BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt2BarOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";

import "./quizSettings.scss";

function QuizSettingsView(props) {
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
    <div className="quizSettings">
      <label htmlFor="">Quiz settings</label>
      <div
        title="Select category"
        onClick={(e) => props.topicSelect(e)}
        id="category"
      >
        {topicIcon(props.topic)}
        <h1>{props.topic}</h1>
        <p>Category</p>
      </div>
      <div
        title="Select difficulty"
        id="difficulty"
        onClick={(e) => props.difficultySelect(e)}
      >
        {Diff(props.difficulty)}
        <h1>{props.difficulty}</h1>
        <h1>{props.currentDifficulty}</h1>
        <p>Difficulty</p>
      </div>
      <div
        title="Select nuber of questions"
        id="numberOfQuestions"
        onClick={(e) => props.questionsSelect(e)}
      >
        <h1 className="number">{props.question}</h1>
        <p>Questions</p>
      </div>
      <button onClick={props.getQuiz}>Take Quiz</button>
    </div>
  );
}

export default QuizSettingsView;
