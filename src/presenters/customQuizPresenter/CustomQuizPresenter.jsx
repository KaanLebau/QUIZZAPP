import { useState, useEffect } from "react";
import QuizSettingsView from "../../views/quizSettingsView/QuizSettingsView";
import getQuestions from "../../api/QuizSource";
import { useNavigate } from "react-router-dom";
import {
  topicAlternatives,
  difficultyAlternatives,
  questionAternatives,
  addQuestions,
} from "../../models/utilities";
import { useRecoilState } from "recoil";
import { activeQuizState } from "../../models/appModel";

function CustomQuizPresenter() {
  const [customQuiz, setCustomQuiz] = useState({
    category: "",
    difficulty: "",
    numberOfQuestions: 5,
    questions: [],
  });
  const [theDifficulty, setTheDifficulty] = useState(0);
  const [theTopic, setTheTopic] = useState(0);
  const [theQuestion, setTheQuestion] = useState(0);
  const [, setActiveQuiz] = useRecoilState(activeQuizState);

  const navigate = useNavigate();

  function handleQuestions(e) {
    theQuestion !== 3 ? setTheQuestion(theQuestion + 1) : setTheQuestion(0);
    setCustomQuiz({
      ...customQuiz,
      [e.target.id]: questionAternatives[theQuestion],
    });
  }

  function handleDifficulty(e) {
    theDifficulty !== 2
      ? setTheDifficulty(theDifficulty + 1)
      : setTheDifficulty(0);
    setCustomQuiz({
      ...customQuiz,
      [e.target.id]: difficultyAlternatives[theDifficulty],
    });
  }
  function handleTopic(e) {
    theTopic !== 3 ? setTheTopic(theTopic + 1) : setTheTopic(0);
    setCustomQuiz({
      ...customQuiz,
      [e.target.id]: topicAlternatives[theTopic],
    });
  }

  async function handleSearch() {
    let fetchedQuestions = await getQuestions(customQuiz);
    customQuiz.questions = addQuestions(fetchedQuestions);
    setActiveQuiz(customQuiz);
    navigate("./active");
  }

  function update() {
    setCustomQuiz({
      category: topicAlternatives[theTopic],
      difficulty: difficultyAlternatives[theDifficulty],
      numberOfQuestions: questionAternatives[theQuestion],
    });
  }

  useEffect(() => {
    update();
  }, [theTopic, theDifficulty, theQuestion]);

  return (
    <QuizSettingsView
      topic={topicAlternatives[theTopic]}
      topicSelect={handleTopic}
      difficulty={difficultyAlternatives[theDifficulty]}
      difficultySelect={handleDifficulty}
      question={questionAternatives[theQuestion]}
      questionsSelect={handleQuestions}
      getQuiz={handleSearch}
    />
  );
}

export default CustomQuizPresenter;
