import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultView from "../../views/quizResult/ResultView";

function ResultPresenter(props) {
  const answerDistribution = {
    correct: props.result.correct,
    wrong: props.result.wrogn,
    noAnswer: props.result.noAnswer,
  };

  const navigate = useNavigate();
  function handleResult() {
    navigate("../../");
    console.log("submit result to model");
  }
  return (
    <ResultView
      result={props.result}
      chartTitle={"Answer distributions"}
      chartData={answerDistribution}
      submit={handleResult}
    />
  );
}

export default ResultPresenter;
