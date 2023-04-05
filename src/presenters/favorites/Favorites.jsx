import "./favorites.scss";

import QuizCard from "../quizCard/QuizCard";
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
        {props.model.favorites.map((theCard, index) => (
          <QuizCard
            model={props.model}
            card={theCard}
            update={(card) => props.model.updateFavorite(index, card)}
            key={index}
            selectedCard={theQuiz}
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
