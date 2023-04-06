import { useState } from "react";
import QuizSettings from "../../views/quizSettings/QuizSettings";
import getQuestions from "../../api/QuizSource";
import { useNavigate } from "react-router-dom";

function CustomQuiz(props) {
  const [customQuiz, setCustomQuiz] = useState({
    category: "",
    dificultie: "",
    numberOfQuestions: 5,
  });
  const [theDificultie, setTheDificultie] = useState(0);
  const [dificultie, setDificultie] = useState(
    props.model.difficultie[theDificultie]
  );
  const [theTopic, setTheTopic] = useState(0);
  const [topic, setTopic] = useState(props.model.topic[theTopic]);
  const numberOfQuestions = [5, 10, 15, 20];
  const [question, setQuestion] = useState(0);
  const [numberOfQuestion, setNumberOfQuestions] = useState(
    numberOfQuestions[question]
  );
  const navigate = useNavigate();

  function handleQuestions() {
    question !== 3 ? setQuestion(question + 1) : setQuestion(0);
    setNumberOfQuestions(numberOfQuestions[question]);
    setCustomQuiz({ ...customQuiz, numberOfQuestions: numberOfQuestion });
  }

  function handleDificultie() {
    theDificultie !== 2
      ? setTheDificultie(theDificultie + 1)
      : setTheDificultie(0);
    setDificultie(props.model.difficultie[theDificultie]);
    setCustomQuiz({
      ...customQuiz,
      dificultie: props.model.difficultie[theDificultie],
    });
  }
  function handleTopic() {
    theTopic !== 3 ? setTheTopic(theTopic + 1) : setTheTopic(0);
    setTopic(props.model.topic[theTopic]);
    setCustomQuiz({ ...customQuiz, category: props.model.topic[theTopic] });
  }

  async function handleSearch() {
    const quiz = await getQuestions({ customQuiz });
    console.log(quiz)
    navigate("./active", { state: { quiz } });
  }
  function update() {
    handleDificultie();
    handleQuestions();
    handleTopic();
    setCustomQuiz({
      category: props.model.topic[theTopic],
      dificultie: props.model.difficultie[theDificultie],
      numberOfQuestions: numberOfQuestion,
    });
  }

  useState(() => {
    update();
  }, []);

  return (
    <QuizSettings
      topic={topic}
      topicSelect={handleTopic}
      difficultie={dificultie}
      dificultieSelect={handleDificultie}
      question={numberOfQuestion}
      questionsSelect={handleQuestions}
      getQuiz={handleSearch}
    />
  );
}

export default CustomQuiz;
