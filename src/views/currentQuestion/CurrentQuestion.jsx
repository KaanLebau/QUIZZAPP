import "./currentQuestion.scss";
import React, { useState } from "react";
import { Filter } from "@mui/icons-material";

function CurrentQuestion(props) {
  const [selected, setSelected] = useState();

  function handleAnswer(a) {
    console.log(a.targetr.value);
    console.log(props.question);
  }

  //console.log(props.question.answers[0].answer);
  return (
    <div className="theQuestion">
      <div className="questionInfo">{props.question.id}</div>
      <div className="question">{props.question.question}</div>
      <div className="altenativ">
        {props.question?.answers.map((a) => (
          <div
            className="alt"
            value={a.isCorrect}
            onClick={(e) => {
              handleAnswer(e);
            }}
          >
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
