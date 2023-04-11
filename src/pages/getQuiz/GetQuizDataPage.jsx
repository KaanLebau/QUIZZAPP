import CustomQuiz from "../../presenters/customQuiz/CustomQuiz";
import Favorites from "../../presenters/favorites/Favorites";
import "./getQuizDataPage.scss";
import Head from "../../components/head/Head";

function GetQuizDataPage(props) {
  return (
    <div className="getQuiz">
      <Head currentUser={true} />
      <div className="right">
        <div className="options">
          <Favorites model={props.model} />
          <CustomQuiz quiz={props.quiz}/>
        </div>
      </div>
    </div>
  );
}

export default GetQuizDataPage;
