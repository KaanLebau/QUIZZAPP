import SignalCellularAlt1BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt1BarOutlined";
import SignalCellularAlt2BarOutlinedIcon from "@mui/icons-material/SignalCellularAlt2BarOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";

import "./quizSettings.scss";
import React, { useEffect, useState } from "react";

function QuizSettings(props) {
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
      <div title="Select category" onClick={props.topicSelect}>
        {topicIcon(props.topic)}
        <h1>{props.topic}</h1>
        <p>Category</p>
      </div>
      <div
        title="Select dificulty"
        id={"dificultie"}
        onClick={props.dificultieSelect}
      >
        {Diff(props.difficultie)}
        <h1>{props.difficultie}</h1>
        <h1>{props.currentDificultie}</h1>
        <p>Dificultie</p>
      </div>
      <div
        title="Select nuber of questions"
        id={props.question}
        onClick={(e) => {
          props.questionsSelect(e.target.id);
        }}
      >
        <h1 className="number">{props.question}</h1>
        <p>Questions</p>
      </div>
      <button onClick={props.getQuiz}>Take Quiz</button>
    </div>
  );
}

export default QuizSettings;
