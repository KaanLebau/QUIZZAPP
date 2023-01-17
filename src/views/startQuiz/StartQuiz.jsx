import "./startQuiz.scss";

function StartQuiz(props) {
  return (
    <div className="quizStart">
      <div className="row">
        <h2>Topic: </h2>
        <h2>{props.quizData[0].category}</h2>
      </div>
      <div className="row">
        <h2>Difficultie: </h2>
        <h2>{props.quizData[0].difficultie}</h2>
      </div>
      <div className="row">
        <h2>Questions: </h2>
        <h2>{props.quizData.length}</h2>
      </div>
      <button className="start" onClick={props.begin} title="Begin">
        Start Quiz
      </button>
    </div>
  );
}

export default StartQuiz;
