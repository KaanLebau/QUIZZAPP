import "./currentQuestion.scss";
import React, { useState } from "react";
import { useEffect } from "react";

function CurrentQuestion(props) {
  const [question, setQuestion] = useState(props.question);

  return (
    <div className="theQuestion">
      <div className="questionInfo">{question.id}</div>
      <div className="question">{question.question}</div>
      <div className="altenativ">
        {question?.answers.map((a, key) => (
          <div className="alt" id={key}>
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
