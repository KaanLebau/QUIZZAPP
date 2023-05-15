import "./favorites.scss";
import QuizCardPresenter from "../quizCardPresenter/QuizCardPresenter";
import getQuestions from "../../api/QuizSource";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { favoritesSelectorState, activeQuizState } from "../../models/appModel";
import { useNavigate } from "react-router-dom";
import { addQuestions } from "../../models/utilities";

function FavoritesPresenter(props) {
  const favorites = useRecoilValue(favoritesSelectorState);
  const navigate = useNavigate();
  const setActiveQuiz = useSetRecoilState(activeQuizState);
  async function theQuiz(query) {
    let fetchedQuestions = await getQuestions(query);
    let customQuiz = {
      category: query.category,
      difficulty: query.difficulty,
      numberOfQuestions: query.numberOfQuestions,
      questions: addQuestions(fetchedQuestions),
    };
    setActiveQuiz(customQuiz);
    navigate("./active");
  }

  return (
    <div className="favorites">
      <label htmlFor="">Favorites</label>
      <div className="cards">
        {favorites.map((theCard, index) => (
          <QuizCardPresenter
            card={theCard}
            key={index}
            selectedCard={theQuiz}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPresenter;
