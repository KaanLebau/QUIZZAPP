import CustomQuizPresenter from "../../presenters/customQuizPresenter/CustomQuizPresenter";
import FavoritesPresenter from "../../presenters/favoritesPresenter/FavoritesPresenter";
import "./getQuizDataPage.scss";
import HeadPresenter from "../../presenters/headPresenter/HeadPresenter";

function GetQuizDataPage() {
  return (
    <div className="getQuiz">
      <HeadPresenter />

      <div className="options">
        <FavoritesPresenter />
        <CustomQuizPresenter />
      </div>
    </div>
  );
}

export default GetQuizDataPage;
