import "./cardView.scss";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";

function CardView(props) {
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
    <div className="cardView">
      <div className="theData">
        <div className="bild">{topicIcon(props.data.basicData.topic)}</div>
        <p className="title">
          {props.data.basicData.topic === "user"
            ? props.data.basicData.name
            : props.data.basicData.topic}
        </p>
      </div>
      <div className="theData">
        <p className="title">Passed: </p>
        <p className="data">{props.data.basicData.numberOfPass}</p>
      </div>
      <div className="theData">
        <p className="title">Failed: </p>
        <p className="data">{props.data.basicData.numberOfFaild}</p>
      </div>
      <div className="theData">
        <p className="title">Correct:</p>
        <p className="data">{props.data.basicData.numberOfCorrect}</p>
      </div>
      <div className="theData">
        <p className="title">Wrong:</p>
        <p className="data">{props.data.basicData.numberOfWrong}</p>
      </div>
      <div className="theData">
        <p className="title">Easy passed:</p>
        <p className="data">{props.data.basicData.numberOfEasyPass}</p>
      </div>
      <div className="theData">
        <p className="title">Medium passed:</p>
        <p className="data">{props.data.basicData.numberOfMediumPass}</p>
      </div>
      <div className="theData">
        <p className="title">Hard passed:</p>
        <p className="data">{props.data.basicData.numberOfHardPass}</p>
      </div>
    </div>
  );
}

export default CardView;
