import { useState, useEffect } from "react";
import QuizSettings from "../../views/quizSettings/QuizSettings";
import getQuestions from "../../api/QuizSource";
import { useNavigate } from "react-router-dom";
import {
  topicAlternatives,
  difficultieAlternatives,
  questionAternatives,
} from "../../models/utilities";

function CustomQuiz(props) {
  const difficulties = difficultieAlternatives();
  const topics = topicAlternatives();
  const questions = questionAternatives();
  const [customQuiz, setCustomQuiz] = useState({
    category: "",
    dificultie: "",
    numberOfQuestions: 5,
  });
  const [theDificultie, setTheDificultie] = useState(0);
  const [theTopic, setTheTopic] = useState(0);
  const [theQuestion, setTheQuestion] = useState(0);

  const navigate = useNavigate();

  function handleQuestions(e) {
    theQuestion !== 3 ? setTheQuestion(theQuestion + 1) : setTheQuestion(0);
    setCustomQuiz({ ...CustomQuiz, [e.target.id]: questions[theQuestion] });
  }

  function handleDificultie(e) {
    theDificultie !== 2
      ? setTheDificultie(theDificultie + 1)
      : setTheDificultie(0);
    setCustomQuiz({
      ...CustomQuiz,
      [e.target.id]: difficulties[theDificultie],
    });
  }
  function handleTopic(e) {
    theTopic !== 3 ? setTheTopic(theTopic + 1) : setTheTopic(0);
    setCustomQuiz({ ...CustomQuiz, [e.target.id]: topics[theTopic] });
  }

  async function handleSearch() {
    console.log(customQuiz);
    //const quiz = await getQuestions({ customQuiz });
    //console.log(quiz);
    //navigate("./active", { state: { quiz } });
  }

  function update() {
    setCustomQuiz({
      category: topics[theTopic],
      dificultie: difficulties[theDificultie],
      numberOfQuestions: questions[theQuestion],
    });
  }

  useEffect(() => {
    update();
  }, [theTopic, theDificultie, theQuestion]);

  return (
    <QuizSettings
      topic={topics[theTopic]}
      topicSelect={handleTopic}
      difficultie={difficulties[theDificultie]}
      dificultieSelect={handleDificultie}
      question={questions[theQuestion]}
      questionsSelect={handleQuestions}
      getQuiz={handleSearch}
    />
  );
}

export default CustomQuiz;
