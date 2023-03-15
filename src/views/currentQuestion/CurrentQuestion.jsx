import "./currentQuestion.scss";
import React, { useState } from "react";
import { useEffect } from "react";

function CurrentQuestion(props) {
  return (
    <div className="theQuestion">
      <div className="questionInfo">{props.question.category}</div>
      <div className="question">{props.question.question}</div>
      <div className="altenativ">
        {props.question.answers.map((a, key) => (
          <div className="alt" id={key} onClick={props.chooseAnswer}>
            {a.answer}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={props.prev}>Prev</button>
        <button onClick={props.next}>Next</button>
      </div>
    </div>
  );
}

export default CurrentQuestion;
