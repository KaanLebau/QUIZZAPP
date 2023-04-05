import "./activeQuizPresenter.scss";
import React, { useEffect, useState } from "react";
import QuestionsView from "../../views/questionsView/QuestionsView";
import StartQuiz from "../../views/startQuiz/StartQuiz";
import CurrentQuestion from "../../views/currentQuestion/CurrentQuestion";
import { SocialDistanceOutlined } from "@mui/icons-material";
import { type } from "@testing-library/user-event/dist/type";

function ActiveQuizPresenter(props) {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState({});
  const [progress, setProgress] = useState(0);
  const [, setActiveAnswer] = useState();
  const [answered, setAnswered] = useState();
  
  function handleNext() {
    if (index === props.quiz.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setActive(props.quiz[index])
    setActiveAnswer(props.quiz[index].answer)
  }

  function handlePrev() {
    if (index === 0) {
      setIndex(props.quiz.length - 1);
    } else {
      setIndex(index - 1);
    }
    setActive(props.quiz[index])
    setActiveAnswer(props.quiz[index])
  }

  function newQuestion(e) {
    setIndex(Number.parseInt(e.target.id));
    setActive(props.quiz[index])
    setActiveAnswer(active.answer)
  }

  function beginQuiz() {
    setStart(true);
    setActive(props.quiz[index]);
  }

  function calculateProgress() {
    function count(q) {
      return q.answered ? 1 : 0;
    }
    setAnswered(
      props.quiz.map(count).reduce((acc, val) => {
        return acc + val;
      }, 0)
    );
    setProgress((answered / props.quiz.length).toFixed(2) * 100);
  }
  function activateAnswer(e) {
    if (!active.answered) {
      active.answered = true;
    }
    props.quiz[index].setAnswer(Number.parseInt(e.target.id));
    setActiveAnswer(props.quiz[index].answer)
  }
  useEffect(() => {
    console.log("useEffect")
    setActive(props.quiz[index]);
  }, [index, active.answer]);

  return (
    <div className="activePresenter">
      <div className="activeQuestion">
        {start ? (
          <CurrentQuestion
            question={active}
            givenAnswer={active.answer}
            chooseAnswer={activateAnswer}
            next={handleNext}
            prev={handlePrev}
          />
        ) : (
          <StartQuiz begin={beginQuiz} quizData={props.quiz} />
        )}
      </div>
      <QuestionsView  questions={props.quiz}
                      questionSelection={newQuestion}
                      activeIndex={index}
                      beenAnswered={active.answered}
                      quizActive={start}/>
    </div>
  );
}

export default ActiveQuizPresenter;
