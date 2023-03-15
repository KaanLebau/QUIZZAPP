import "./activeQuizPresenter.scss";
import React, { useEffect, useState } from "react";
import QuestionsView from "../../views/questionsView/QuestionsView";
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
    setActive(props.quiz[index])
  }

  function handlePrev() {
    if (index === 0) {
      setIndex(props.quiz.length - 1);
    } else {
      setIndex(index - 1);
    }
    setActive(props.quiz[index])
  }

  function newQuestion(e) {
    setIndex(Number.parseInt(e.target.id));
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
  function activateAnswer(e) {
    console.log(e)
    console.log("Answer '" + e.target.textContent + "' was chosen")
  }
  useEffect(() => {
    calculateProgress();
    setActive(props.quiz[index]);
  }, [index]);

  return (
    <div className="activePresenter">
      <div className="activeQuestion">
        {start ? (
          <CurrentQuestion
            question={active}
            answered={handleAnswer}
            chooseAnswer={activateAnswer}
            next={handleNext}
            prev={handlePrev}
          />
        ) : (
          <StartQuiz begin={beginQuiz} quizData={props.quiz} />
        )}
      </div>
      <QuestionsView questions={props.quiz} questionSelection={newQuestion} />
    </div>
  );
}

export default ActiveQuizPresenter;
