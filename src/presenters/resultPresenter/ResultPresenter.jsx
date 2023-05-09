import React from "react";
import { useNavigate } from "react-router-dom";
import ResultView from "../../views/resultView/ResultView";
import { useLocation } from 'react-router-dom';
import QuestionsView from "../../views/questionsView/QuestionsView";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeQuizState, activeUser } from "../../models/atoms";
import { updateUser } from "../../models/utilities";
import "./resultPresenter.scss"

function ResultPresenter(props) {
  const takenQuiz = useRecoilValue(activeQuizState);
  const [userData, setUserData] = useRecoilState(activeUser);
  const result = useLocation().state;
  const answerDistribution = {
    correct: result.correct,
    wrong: result.wrong,
    noAnswer: result.noAnswers
  };

  const navigate = useNavigate();

  function handleResult() {
    let updatedUser = updateUser(userData, result)
    setUserData(updatedUser);
    console.log(userData);
    //navigate("../../");
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
