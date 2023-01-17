import React, { useState } from "react";
import QuizCardView from "../../views/quizCardView/QuizCardView";

function QuizCard(props) {
  const [edit, setEdit] = useState(true);
  const [theCard, setTheCard] = useState(props.card);

  function handleSaveFavorite() {
    setEdit(true);
    props.update(theCard);
  }
  function handleUpdate(input) {
    setTheCard({ ...theCard, [input.id]: input.value });
  }
  function handleTakeQuiz() {
    console.log(theCard);
  }
  function handleRemove() {
    setTheCard({});
  }

  return (
    <QuizCardView
      category={props.model.topic}
      difficultie={props.model.difficultie}
      numberOfQuestions={[5, 10, 15, 20]}
      edit={edit}
      mode={() => setEdit(!edit)}
      card={theCard}
      saveFavorite={handleSaveFavorite}
      update={handleUpdate}
      take={handleTakeQuiz}
      remove={handleRemove}
    />
  );
}

export default QuizCard;
