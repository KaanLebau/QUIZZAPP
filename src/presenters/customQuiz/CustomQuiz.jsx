import { useState, useEffect } from "react";
import QuizSettings from "../../views/quizSettingsView/QuizSettingsView";
import getQuestions from "../../api/QuizSource";
import { useNavigate } from "react-router-dom";
import {
  topicAlternatives,
  difficultieAlternatives,
  questionAternatives,
  addQuestions,
} from "../../models/utilities";
import { useRecoilState } from "recoil";
import { activeQuizState } from "../../models/atoms";

function CustomQuiz(props) {
  const [customQuiz, setCustomQuiz] = useState({
    category: "",
    difficultie: "",
    numberOfQuestions: 5,
    questions: []
  });
  const [theDificultie, setTheDificultie] = useState(0);
  const [theTopic, setTheTopic] = useState(0);
  const [theQuestion, setTheQuestion] = useState(0);
  const [, setActiveQuiz] = useRecoilState(activeQuizState)

  const navigate = useNavigate();

  function handleQuestions(e) {
    theQuestion !== 3 ? setTheQuestion(theQuestion + 1) : setTheQuestion(0);
    setCustomQuiz({
      ...CustomQuiz,
      [e.target.id]: questionAternatives[theQuestion],
    });
  }

  function handleDificultie(e) {
    theDificultie !== 2
      ? setTheDificultie(theDificultie + 1)
      : setTheDificultie(0);
    setCustomQuiz({
      ...CustomQuiz,
      [e.target.id]: difficultieAlternatives[theDificultie],
    });
  }
  function handleTopic(e) {
    theTopic !== 3 ? setTheTopic(theTopic + 1) : setTheTopic(0);
    setCustomQuiz({
      ...CustomQuiz,
      [e.target.id]: topicAlternatives[theTopic],
    });
  }

  async function handleSearch() {
    let fetchedQuestions = await getQuestions({ customQuiz });
    customQuiz.questions = addQuestions(fetchedQuestions);
    setActiveQuiz(customQuiz);
    navigate("./active");
  }

  function update() {
    setCustomQuiz({
      category: topicAlternatives[theTopic],
      dificultie: difficultieAlternatives[theDificultie],
      numberOfQuestions: questionAternatives[theQuestion]

    });
  }

  useEffect(() => {
    update();
  }, [theTopic, theDificultie, theQuestion]);

  return (
    <QuizSettings
      topic={topicAlternatives[theTopic]}
      topicSelect={handleTopic}
      difficultie={difficultieAlternatives[theDificultie]}
      dificultieSelect={handleDificultie}
      question={questionAternatives[theQuestion]}
      questionsSelect={handleQuestions}
      getQuiz={handleSearch}
    />
  );
}

export default CustomQuiz;
