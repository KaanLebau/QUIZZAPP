import "./activeQuizPresenter.scss";
import React, { useEffect, useState } from "react";
import QuestionsView from "../../views/questions/QuestionsView";
import QuizInfoView from "../../views/quizInfoview/QuizInfoView";
import StartQuiz from "../../views/startQuiz/StartQuiz";
import CurrentQuestion from "../../views/currentQuestion/CurrentQuestion";

function ActiveQuizPresenter(props) {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(5);
  const [active, setActive] = useState({});
  const [progress, setPregress] = useState(0);
  const [answerd, setAnswerd] = useState(0);
  function handleNext() {
    if (index === props.quiz.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function handlePrev() {
    if (index === 0) {
      setIndex(props.quiz.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function newQuestion(e) {
    setIndex(e.target.id);
    setActive(props.quiz[index]);
  }
  function beginQuiz() {
    setStart(true);
    setActive(props.quiz[index]);
  }
  function calculateProgress() {
    function count(q) {
      return q.answered ? 1 : 0;
    }
    setAnswerd(
      props.quiz.map(count).reduce((acc, val) => {
        return acc + val;
      }, 0)
    );
    setPregress((answerd / props.quiz.length).toFixed(2) * 100);
  }
  function handleAnswer() {
    active.answered = true;
  }
  useEffect(() => {
    calculateProgress();
    setActive(props.quiz[index]);
  }, [index, answerd]);

  return (
    <div className="activePresenter">
      <div className="top">
        <label htmlFor="" className="containerLabel">
          Quiz info
        </label>
        <QuizInfoView
          quiz={props.quiz}
          current={active}
          takeQuiz={start}
          progress={progress}
        />
      </div>
      <div className="middle">
        <label htmlFor="" className="containerLabel">
          Question
        </label>
        {start ? (
          <CurrentQuestion
            question={active}
            answered={handleAnswer}
            next={handleNext}
            prev={handlePrev}
          />
        ) : (
          <StartQuiz begin={beginQuiz} quizData={props.quiz} />
        )}
      </div>
      <div className="bottom">
        <label className="containerLabel">Questions</label>
        <QuestionsView questions={props.quiz} questionSelection={newQuestion} />
      </div>
    </div>
  );
}

export default ActiveQuizPresenter;
