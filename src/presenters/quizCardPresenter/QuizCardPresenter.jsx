import React, { useEffect, useState } from "react";
import QuizCardView from "../../views/quizCardView/QuizCardView";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import {
  topicAlternatives,
  difficultieAlternatives,
  questionAternatives,
} from "../../models/utilities";
import QuizCardCreator from "../../views/quizCardCreator/QuizCardCreator";
import { useRecoilState, useSetRecoilState } from "recoil";
import { favoritesState } from "../../models/atoms";
import { replaceItemAtIndex } from "../../models/utilities";
function QuizCardPresenter(props) {
  const [edit, setEdit] = useState(false);
  const [theCard, setTheCard] = useState(props.card);
  const [newCard, setNewCard] = useState({ empty: true, edit: false });
  const [empty, setEmpty] = useState(true);
  const setFavorite = useSetRecoilState(favoritesState);
  const [userFavorites, setUserFavorites] = useRecoilState(favoritesState);
  function handleSaveFavorite() {
    setEdit(true);
    props.update(theCard);
  }
  function handleUpdate(input) {
    setTheCard({ ...theCard, [input.id]: input.value });
  }
  function handleTakeQuiz() {
    props.selectedCard(theCard);
  }
  function handleRemove() {
    setTheCard({});
  }
  //QiuzCardCreator functions
  function editing() {
    setNewCard({ ...newCard, edit: true });
    console.log(newCard);
  }
  function handleInput(input) {
    setNewCard({ ...newCard, [input.id]: input.value });
  }
  function handleCreate() {
    newCard.empty = false;
    newCard.edit = false;
    const list = userFavorites;
    const newList = replaceItemAtIndex(list, props.index, newCard);
    setUserFavorites(newList);
    console.log(userFavorites);
  }
  function handleCancelCreate() {
    setNewCard({ empty: true, edit: false });
  }

  return (
    <div>
      {props.card.empty ? (
        <QuizCardCreator
          edit={newCard.edit}
          editingCard={editing}
          empty={newCard.empty}
          card={handleInput}
          create={handleCreate}
          cancelCreate={handleCancelCreate}
        />
      ) : (
        <QuizCardView
          category={topicAlternatives}
          difficultie={difficultieAlternatives}
          numberOfQuestions={difficultieAlternatives}
          edit={edit}
          mode={() => setEdit(!edit)}
          card={theCard}
          saveFavorite={handleSaveFavorite}
          update={handleUpdate}
          take={handleTakeQuiz}
          remove={handleRemove}
        />
      )}
    </div>
  );
}

export default QuizCardPresenter;

/*<QuizCardView
      category={topicAlternatives}
      difficultie={difficultieAlternatives}
      numberOfQuestions={difficultieAlternatives}
      edit={edit}
      mode={() => setEdit(!edit)}
      card={theCard}
      saveFavorite={handleSaveFavorite}
      update={handleUpdate}
      take={handleTakeQuiz}
      remove={handleRemove}
    />
    */
