import React from "react";
import "./quizCardCreator.scss";
import {
  topicAlternatives,
  difficultieAlternatives,
  questionAternatives,
} from "../../models/utilities";
import { GrAddCircle } from "react-icons/gr";

function QuizCardCreator(props) {

  return (
    <div className="quizCardCreator">
      {!props.edit ? (
        <div
          className="editCard"
          id="editing"
          title="Create"
          onClick={props.editingCard}
        >
          <GrAddCircle className="icon" onClick={props.editingCard} />
          Add
        </div>
      ) : (
        <div className="card">
          <div className="quizData">
            <span className="title">Category:</span>
            <select
              name=""
              id="category"
              className="selectC"
              onChange={(e) => {
                props.card({ id: e.target.id, value: e.target.value });
              }}
            >
              <option id="category" value="" key="">
                .....
              </option>
              {topicAlternatives.map((top) => {
                return (
                  <option id="category" value={top} key={top}>
                    {top}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="quizData">
            <span className="title">Difficultie:</span>
            <select
              name=""
              id="difficultie"
              className="selectD"
              onChange={(e) => {
                props.card({ id: e.target.id, value: e.target.value });
              }}
            >
              <option id="difficultie" value="" key="">
                .....
              </option>
              {difficultieAlternatives.map((difficultie) => {
                return (
                  <option
                    id="difficultie"
                    value={difficultie}
                    key={difficultie}
                  >
                    {difficultie}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="quizData">
            <span className="title">Questions:</span>
            <select
              name=""
              id="numberOfQuestions"
              className="selectQ"
              onChange={(e) => {
                props.card({ id: e.target.id, value: e.target.value });
              }}
            >
              <option value={5} key={5}>
                ...
              </option>
              {questionAternatives.map((question) => {
                return (
                  <option
                    id="numberOfQuestions"
                    value={question}
                    key={question}
                  >
                    {question}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="buttons">
            <button onClick={props.create}>Create</button>
            <button onClick={props.create}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizCardCreator;
