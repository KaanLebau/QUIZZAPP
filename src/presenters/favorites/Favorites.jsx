import "./favorites.scss";

import QuizCard from "../quizCard/QuizCard";

function Favorites(props) {
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
