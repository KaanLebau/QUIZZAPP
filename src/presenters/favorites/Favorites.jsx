import "./favorites.scss";

import QuizCardPresenter from "../quizCardPresenter/QuizCardPresenter";
import getQuestions from "../../api/QuizSource";
import { useRecoilState } from "recoil";
import { favoritesState } from "../../models/atoms";

function Favorites(props) {
  const [favorites, setFavorites] = useRecoilState(favoritesState);
  function theQuiz(query) {
    getQuestions(query);
  }
  return (
    <div className="favorites">
      <label htmlFor="">Favorites</label>
      <div className="cards">
        {favorites.map((theCard, index) => (
          <QuizCardPresenter
            card={theCard}
            update={(card) => setFavorites(...favorites, card)}
            key={index}
            selectedCard={theQuiz}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
/*
{mockCards.map((theCard) => {
  <QuizCard card={theCard} />;
})}
*/
