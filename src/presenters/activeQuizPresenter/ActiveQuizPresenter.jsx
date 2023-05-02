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
  const [activeAnswer, setActiveAnswer] = useState(activeQuestion.answer);
 
  function handleNext() {
    if (index === activeQuiz.questions.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setActiveQuestion(activeQuiz.questions[index]);
    setActiveAnswer(activeQuiz.questions[index].answer);
  }
  
  function handlePrev() {
    if (index === 0) {
      setIndex(activeQuiz.questions.length - 1);
    } else {
      setIndex(index - 1);
    }
    setActiveQuestion(activeQuiz.questions[index]);
    setActiveAnswer(activeQuiz.questions[index].answer);
  }
  
  function newQuestion(e) {
    setIndex(Number.parseInt(e));
    setActiveQuestion(activeQuiz.questions[index]);
    setActiveAnswer(activeQuiz.questions[index].answer);
  } 

  function beginQuiz() {
    setStart(true);
  }

  function activateAnswer(answerIndex) {
    const updatedQuestion = { ...activeQuestion, answer: Number.parseInt(answerIndex), answered: true };
    setActiveQuestion(updatedQuestion);
    setActiveAnswer(updatedQuestion.answer);
    updateCurrentQuiz(updatedQuestion);
  }  
  
  function updateCurrentQuiz(updatedQuestion) {  
    const updatedQuestions = replaceItemAtIndex(activeQuiz.questions, index, updatedQuestion);
    const updatedQuiz = { ...activeQuiz, questions: updatedQuestions };
    setActiveQuiz(updatedQuiz);
  }
    
  function handleSubmit() {
    let result = correctQuiz(activeQuiz);
    console.log(result)
  }

  function checkQuestionsError() {
    return Number.parseInt(activeQuiz.numberOfQuestions) !== Number.parseInt(activeQuiz.questions.length);
  }
  
  useEffect(() => {
    setActiveQuestion(activeQuiz.questions[index]);
    setActiveAnswer(activeQuiz.questions[index].answer);
  }, [index]);

  return (
    <div className="activePresenter">
      <div className="activeQuestion">
        {start ? (
          <CurrentQuestion
            question={activeQuestion}
            givenAnswer={activeAnswer}
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
