import React from "react";
import { useNavigate } from "react-router-dom";
import ResultView from "../../views/resultView/ResultView";
import { useLocation } from "react-router-dom";
import QuestionsView from "../../views/questionsView/QuestionsView";
import { useRecoilState } from "recoil";
import { activeQuizState, activeUser } from "../../models/appModel";
import { updateUser } from "../../models/utilities";
import { RemoteStorage } from "../../integration/RemoteStorage";
import ChartPresenter from "../chartPresenter/ChartPresenter";

import "./resultPresenter.scss";

function ResultPresenter() {
  const [takenQuiz, setTakenQuiz] = useRecoilState(activeQuizState);
  const [userData, setUserData] = useRecoilState(activeUser);
  const result = useLocation().state;
  const db = RemoteStorage();
  const answerDistribution = {
    correct: result.correct,
    wrong: result.wrong,
    noAnswer: result.noAnswers,
  };

  const navigate = useNavigate();

  function handleResult() {
    let updatedUser = updateUser(userData, result);
    setUserData(updatedUser);
    db.updateRemoteStorageFromModel({
      field: result.category.toLowerCase(),
      data: updatedUser[result.category.toLowerCase()],
    });
    setTakenQuiz({});
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
      <div className="chart">
        <h3 className="title">{result.chartData.title}</h3>
        <ChartPresenter chartData={result.chartData} />
      </div>
      <QuestionsView
        questions={takenQuiz.questions}
        questionSelection={() => console.log("Not implemented here!")}
        activeIndex={-1}
        quizActive={false}
        quizIsSubmitted={true}
      />
      <div className="bottom">
        <button title="To Dashboard" onClick={handleResult}>
          To Dashboard
        </button>
      </div>
    </div>
  );
}

export default ResultPresenter;
