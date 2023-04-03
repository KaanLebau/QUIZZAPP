import "./questionsView.scss";
import { AiOutlineQuestionCircle, AiOutlineCheckCircle } from "react-icons/ai";

function QuestionsView(props) {
  function selection(e) {
    props.questionSelection(e);
  }
  return (
    <div className="questions">
      <label className="containerLabel">Questions</label>
      {props.questions.map((question, index) => {
        return (
          <div
            className={props.activeIndex === index && props.quizActive? "activeQuestion" : "question"}
            id={index}
            key={index}
            onClick={selection}
          >
            {question.answered ? (
              <AiOutlineCheckCircle
                className="ansIcon"
                style={{ color: "rgb(93, 242, 63)" }}
              />
            ) : (
              <AiOutlineQuestionCircle
                className="ansIcon"
                style={{ color: "rgb(191, 36, 36)" }}
              />
            )}
            <div className="row" id={index}>
              <h2 className="data" id={index}>
                {index + 1}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default QuestionsView;

/*

<AiOutlineQuestionCircle className="questionIcon" />
        <AiOutlineCheckCircle className="questionIcon" />

*/
