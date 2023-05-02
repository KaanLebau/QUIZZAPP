import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultView from "../../views/resultView/ResultView";
import { useLocation } from 'react-router-dom';
import QuestionsView from "../../views/questionsView/QuestionsView";
import { useRecoilValue } from "recoil";
import { activeQuizState } from "../../models/atoms";

function ResultPresenter(props) {
  const activeQuiz = useRecoilValue(activeQuizState);
  const result = useLocation().state;
  const answerDistribution = {
    correct: result.correct,
    wrong: result.wrong,
    noAnswer: result.noAnswers,
  };

  const navigate = useNavigate();
  function handleResult() {
    navigate("../../");
    console.log("submit result to model");
  }
  return (
    <div>
      <ResultView
        result={result}
        chartTitle={"Answer distributions"}
        chartData={answerDistribution}
        submit={handleResult}
        />
      <QuestionsView  questions={activeQuiz.questions}
                      questionSelection={() => console.log("Not implemented here!")}
                      activeIndex={-1}
                      quizActive={false}/>
    </div>
  )
}

export default ResultPresenter;
