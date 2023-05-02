import CustomQuiz from "../../presenters/customQuiz/CustomQuiz";
import Favorites from "../../presenters/favorites/Favorites";
import "./getQuizDataPage.scss";
import HeadPresenter from "../../presenters/headPresenter/HeadPresenter";

function GetQuizDataPage() {
  return (
    <div className="getQuiz">
      <HeadPresenter />
      <div className="right">
        <div className="options">
          <Favorites />
          <CustomQuiz />
        </div>
      </div>
    </div>
  );
}

export default GetQuizDataPage;
