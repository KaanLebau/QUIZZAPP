import React, { useState } from "react";
import QuizCardView from "../../views/quizCardView/QuizCardView";

import QuizCardCreator from "../../views/quizCardCreatorView/QuizCardCreatorView";
import { useRecoilState } from "recoil";
import { favoritesState } from "../../models/atoms";
import { replaceItemAtIndex } from "../../models/utilities";
function QuizCardPresenter(props) {
  const [theCard, setTheCard] = useState(props.card);
  const [, reRender] = useState();
  const [userFavorites, setUserFavorites] = useRecoilState(favoritesState);

  function editingOff() {
    setTheCard({ ...theCard, edit: false });
  }
  function handleUpdate(input) {
    setTheCard({ ...theCard, [input.id]: input.value });
  }
  function handleTakeQuiz() {
    props.selectedCard(theCard);
  }

  //QiuzCardCreator functions
  function editingOn() {
    setTheCard({ ...theCard, edit: true });
    reRender({});
  }
  function handleInput(input) {
    setTheCard({ ...theCard, [input.id]: input.value });
  }
  function handleNewFavorite() {
    theCard.empty = false;
    theCard.edit = false;
    const list = userFavorites;
    const newList = replaceItemAtIndex(list, props.index, theCard);
    setUserFavorites(newList);
  }
  function handleCancel() {
    setTheCard({ empty: true, edit: false });
    reRender({});
    console.log(theCard.empty);
    //const list = userFavorites;
    //const newList = replaceItemAtIndex(list, props.index, theCard);
    //setUserFavorites(newList);
  }

  return (
    <div style={{ background: "transparent" }}>
      {theCard.empty ? (
        <QuizCardCreator
          edit={theCard.edit}
          editOn={editingOn}
          empty={theCard.empty}
          card={handleInput}
          create={handleNewFavorite}
          cancelCreate={handleCancel}
        />
      ) : (
        <QuizCardView
          edit={theCard.edit}
          editOn={editingOn}
          editOff={editingOff}
          card={theCard}
          saveFavorite={handleNewFavorite}
          update={handleUpdate}
          take={handleTakeQuiz}
          remove={handleCancel}
        />
      )}
    </div>
  );
}

export default QuizCardPresenter;

/*<QuizCardView
      category={topicAlternatives}
      difficulty={difficultyAlternatives}
      numberOfQuestions={difficultyAlternatives}
      edit={edit}
      mode={() => setEdit(!edit)}
      card={theCard}
      saveFavorite={handleSaveFavorite}
      update={handleUpdate}
      take={handleTakeQuiz}
      remove={handleRemove}
    />
    */
