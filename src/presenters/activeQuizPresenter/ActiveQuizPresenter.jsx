import "./activeQuizPresenter.scss";
import React, { useEffect, useState } from "react";
import QuestionsView from "../../views/questionsView/QuestionsView";
import StartQuiz from "../../views/startQuiz/StartQuiz";
import CurrentQuestion from "../../views/currentQuestionView/CurrentQuestionView";
import { SocialDistanceOutlined } from "@mui/icons-material";
import { type } from "@testing-library/user-event/dist/type";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeQuizState } from "../../models/atoms";
import { correctQuiz, replaceItemAtIndex } from "../../models/utilities";

function ActiveQuizPresenter() {
  const [activeQuiz, setActiveQuiz] = useRecoilState(activeQuizState);
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(activeQuiz.questions[index]);
  
  function handleNext() {
    if (index === activeQuiz.questions.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setActiveQuestion(activeQuiz.questions[index])
  }

  function handlePrev() {
    if (index === 0) {
      setIndex(activeQuiz.questions.questions.length);
    } else {
      setIndex(index - 1);
    }
    setActiveQuestion(activeQuiz.questions[index])
  }

  function newQuestion(e) {
    setIndex(Number.parseInt(e.target.id));
    setActiveQuestion(activeQuiz.questions[index])
  }

  function beginQuiz() {
    setStart(true);
    setActiveQuestion(activeQuiz.questions[index]);
  }

  function activateAnswer(e) {
    if (!activeQuiz.questions[index].answered) {
      let y = 1;
    }
    activeQuestion.answer = Number.parseInt(e.target.id)
    updateQuestions();
  }

  function updateQuestions(){
    let list = activeQuiz.questions;
    let newlist = replaceItemAtIndex(list, index, activeQuestion)
    setActiveQuiz(newlist)
  }

  function handleSubmit() {
    let result = correctQuiz(activeQuiz.questions)
    console.log(result)
  }

  function checkQuestionsError() {
    
    return Number.parseInt(activeQuiz.numberOfQuestions) !== Number.parseInt(activeQuiz.questions.length);
  }
  
  useEffect(() => {
    setActiveQuestion(activeQuiz.questions[index]);
  }, [index]);

  return (
    <div className="activePresenter">
      <div className="activeQuestion">
        {start ? (
          <CurrentQuestion
            question={activeQuestion}
            givenAnswer={activeQuiz.questions[index].answer}
            chooseAnswer={activateAnswer}
            next={handleNext}
            submit={handleSubmit}
            prev={handlePrev}
          />
        ) : (
          <StartQuiz begin={beginQuiz} quizData={activeQuiz} error={checkQuestionsError()}/>
        )}
      </div>
      <QuestionsView  questions={activeQuiz.questions}
                      questionSelection={newQuestion}
                      activeIndex={index}
                      beenAnswered={activeQuestion.answered}
                      quizActive={start}/>
    </div>
  );
}

export default ActiveQuizPresenter;
