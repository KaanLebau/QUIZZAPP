import "./startQuizView.scss";

function StartQuiz(props) {
  return (
    <div className="quizStart">
      <div className="row">
        <h2>Topic: </h2>
        <h2>{props.quizData.category}</h2>
      </div>
      <div className="row">
        <h2>Difficulty: </h2>
        <h2>{props.quizData.difficulty}</h2>
      </div>
      <div className="row">
        <h2>Questions: </h2>
        <h2>{props.quizData.questions.length}</h2>
      </div>
      {props.error && 
        <span>
          There are no more than {props.quizData.questions.length} {String(props.quizData.difficulty).toLowerCase()} {props.quizData.category} questions!
        </span>
      }
      <button className="start" onClick={props.begin} title="Begin">
        Start Quiz
      </button>
    </div>
  );
}

export default StartQuiz;
