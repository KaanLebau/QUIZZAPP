import "./currentQuestion.scss";
import React from "react";
import { Filter } from "@mui/icons-material";

function CurrentQuestion(props) {
  function alternatives(alt) {
    const keys = Object.keys(props.question.answers);
    const val = Object.values(props.question.answers);

    return (
      <div className="theAlt">
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />;
        <label htmlFor="vehicle3">{alt}</label>
      </div>
    );
  }
  function validValue(value) {
    if (value === null) return false;
    return true;
  }
  function show() {
    console.log(test);
    /*
    const keys = Object.keys(props.question.answers);
    const val = Object.values(props.question.answers);
    keys.map((k) => {
      if (props.question.answers[k] !== null) console.log(k);
    });
    val.map((v) => {
      if (validValue(v)) console.log(v);
    });
    */
  }
  return (
    <div className="theQuestion">
      <div className="questionInfo">{props.question.id}</div>
      <div className="question">{props.question.question}</div>
      <div className="altenativ"></div>
      <div className="buttons">
        <button onClick={show}>show</button>
        <button onClick={props.prev}>Prev</button>
        <button onClick={props.next}>Next</button>
      </div>
    </div>
  );
}

export default CurrentQuestion;
