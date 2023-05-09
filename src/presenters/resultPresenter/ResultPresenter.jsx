import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultView from "../../views/resultView/ResultView";
import { useLocation } from 'react-router-dom';
import QuestionsView from "../../views/questionsView/QuestionsView";
import { useRecoilValue } from "recoil";
import { activeQuizState } from "../../models/atoms";
import "./resultPresenter.scss"

function ResultPresenter(props) {
  const takenQuiz = useRecoilValue(activeQuizState);
  const result = useLocation().state;
  const answerDistribution = {
    correct: result.correct,
    wrong: result.wrong,
    noAnswer: result.noAnswers
  };

  const navigate = useNavigate();
  function handleResult() {
    navigate("../../");
    console.log("submit result to model");
  }
  return (
    <div className="resultPresenter">
      <ResultView
        result={result}
        chartTitle={"Answer distributions"}
        chartData={answerDistribution}
        submit={handleResult}
      />
      <QuestionsView  
        questions={takenQuiz.questions}
        questionSelection={() => console.log("Not implemented here!")}
        activeIndex={-1}
        quizActive={false}
        quizIsSubmitted={true}
      />
    </div>
  )
}

export default ResultPresenter;
