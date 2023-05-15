import React, { useState } from "react";
import QuizCardView from "../../views/quizCardView/QuizCardView";

import QuizCardCreator from "../../views/quizCardCreatorView/QuizCardCreatorView";
import { useRecoilState } from "recoil";
import { favoritesSelectorState } from "../../models/appModel";
import { replaceItemAtIndex } from "../../models/utilities";
import { RemoteStorage } from "../../integration/RemoteStorage";
function QuizCardPresenter(props) {
  const db = RemoteStorage();
  const [theCard, setTheCard] = useState(props.card);

  const [userFavorites, setUserFavorites] = useRecoilState(
    favoritesSelectorState
  );

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
  }
  function handleInput(input) {
    setTheCard({ ...theCard, [input.id]: input.value });
  }
  function handleNewFavorite() {
    theCard.empty = false;
    theCard.edit = false;
    const list = userFavorites;
    const newList = replaceItemAtIndex(list, props.index, theCard);
    db.updateRemoteStorageFromModel({
      field: "favorites",
      data: newList,
    });
    setUserFavorites(newList);
  }
  function handleCancel() {
    setTheCard({ empty: true, edit: false });
    const list = userFavorites;
    const newList = replaceItemAtIndex(list, props.index, theCard);
    db.updateRemoteStorageFromModel({
      field: "favorites",
      data: newList,
    });
    setUserFavorites(newList);
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
          key={props.index}
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
          key={props.index}
        />
      )}
    </div>
  );
}

export default QuizCardPresenter;

