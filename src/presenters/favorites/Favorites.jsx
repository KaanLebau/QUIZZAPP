import "./favorites.scss";

import QuizCard from "../quizCard/QuizCard";
import getQuestions from "../../api/QuizSource";

function Favorites(props) {
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
