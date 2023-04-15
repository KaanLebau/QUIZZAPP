import "./favorites.scss";
import LoadPagePresenter from "../loadPagePresenter/LoadPagePresenter";
import QuizCardPresenter from "../quizCardPresenter/QuizCardPresenter";
import getQuestions from "../../api/QuizSource";
import { useRecoilValue } from "recoil";
import { favoritesState } from "../../models/atoms";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Favorites(props) {
  const [loading, setLoading] = useState(true);
  const favorites = useRecoilValue(favoritesState);
  const navigate = useNavigate();
  async function theQuiz(query) {
    const quiz = await getQuestions({ query });
    console.log(quiz);
    navigate("./active", { state: { quiz } });
  }
  useEffect(() => {
    setTimeout(setLoading, 2000, false);
  }, []);
  return (
    <div className="favorites">
      <label htmlFor="">Favorites</label>

      {loading ? (
        <LoadPagePresenter info={"Loading user"} />
      ) : (
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
      )}
    </div>
  );
}

export default Favorites;
/*
{mockCards.map((theCard) => {
  <QuizCard card={theCard} />;
})}
*/
