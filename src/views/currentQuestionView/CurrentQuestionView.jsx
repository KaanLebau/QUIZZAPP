import React from "react";
import "./currentQuestion.scss";

function CurrentQuestionView(props) {
  return (
    <div className="theQuestion">
      <div className="questionInfo">{props.question.category}</div>
      <div className="question">{props.question.question}</div>
      <div className="alternatives">
        {props.question.answers.map((a, key) => (
          <div
            className={key === props.givenAnswer ? "selected" : "alt"}
            id={key}
            onClick={() => props.chooseAnswer(key)}
            key={key}
          >
            {a.answer}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={props.prev}>Prev</button>
        <button onClick={props.submit}>Submit</button>
        <button onClick={props.next}>Next</button>
      </div>
    </div>
  );
}

export default CurrentQuestionView;
