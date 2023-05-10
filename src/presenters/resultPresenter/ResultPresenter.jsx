import React from "react";
import { useNavigate } from "react-router-dom";
import ResultView from "../../views/resultView/ResultView";
import { useLocation } from 'react-router-dom';
import QuestionsView from "../../views/questionsView/QuestionsView";
import { useRecoilState } from "recoil";
import { activeQuizState, activeUser } from "../../models/atoms";
import { updateUser } from "../../models/utilities";
import { RemoteStorage } from "../../integration/RemoteStorage";
import "./resultPresenter.scss"

function ResultPresenter() {
  const [takenQuiz, setTakenQuiz] = useRecoilState(activeQuizState);
  const [userData, setUserData] = useRecoilState(activeUser);
  const result = useLocation().state;
  const db = RemoteStorage();
  const answerDistribution = {
    correct: result.correct,
    wrong: result.wrong,
    noAnswer: result.noAnswers
  };

  const navigate = useNavigate();

  function handleResult() {
    let updatedUser = updateUser(userData, result);
    db.updateRemoteStorageFromModel({
      field: result.category.toLowerCase(), 
      data: updatedUser[result.category.toLowerCase()] 
    });
    setTakenQuiz({})
    navigate("../../");
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
