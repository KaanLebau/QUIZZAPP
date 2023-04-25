import "./favorites.scss";
import LoadPagePresenter from "../loadPagePresenter/LoadPagePresenter";
import QuizCardPresenter from "../quizCardPresenter/QuizCardPresenter";
import getQuestions from "../../api/QuizSource";
import { useRecoilValue, useRecoilState } from "recoil";
import { favoritesState } from "../../models/atoms";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { activeQuizState } from "../../models/atoms";
import { addQuestions } from "../../models/utilities";

function Favorites(props) {
  const [loading, setLoading] = useState(true);
  const favorites = useRecoilValue(favoritesState);
  console.table(favorites);
  const navigate = useNavigate();
  const [, setActiveQuiz] = useRecoilState(activeQuizState);
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
  useEffect(() => {
    setTimeout(setLoading, 2000, false);
  }, []);
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

export default Favorites;
/*
{mockCards.map((theCard) => {
  <QuizCard card={theCard} />;
})}
*/
