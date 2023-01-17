import "./quizCardView.scss";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditOffOutlinedIcon from "@mui/icons-material/EditOffOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

function QuizCardView(props) {
  return (
    <div className="card">
      {props.edit ? (
        <p title="Edit on">
          {props.empty}
          <EditOffOutlinedIcon
            title="Edit"
            className="icon"
            onClick={props.mode}
          />
        </p>
      ) : (
        <div className="buttons">
          <p title="Edit off">
            <EditOutlinedIcon
              title="Edit"
              className="icon"
              onClick={props.mode}
            />
          </p>
          <p title="Remove">
            <DeleteOutlinedIcon className="icon" onClick={props.remove} />
          </p>
        </div>
      )}
      <div className="quizData">
        <p htmlFor="">Category:</p>
        {!props.edit ? (
          <select
            className="selectC"
            name=""
            id="category"
            onChange={(e) => {
              props.update({ id: e.target.id, value: e.target.value });
            }}
          >
            <option id="category" value="">
              .....
            </option>
            {props.category.map((cat) => {
              return (
                <option id="category" value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
        ) : (
          <h1>{props.card.category}</h1>
        )}
      </div>
      <div className="quizData">
        <p htmlFor="">Difficultie:</p>
        {!props.edit ? (
          <select
            className="selectD"
            name=""
            id="difficultie"
            onChange={(e) => {
              props.update({ id: e.target.id, value: e.target.value });
            }}
          >
            {" "}
            <option id="difficultie" value="">
              .....
            </option>
            {props.difficultie.map((dif) => {
              return (
                <option id="difficultie" value={dif}>
                  {dif}
                </option>
              );
            })}
          </select>
        ) : (
          <h2>{props.card.difficultie}</h2>
        )}
      </div>
      <div className="quizData">
        <p htmlFor="">Questions:</p>
        {!props.edit ? (
          <select
            className="selectQ"
            name=""
            id="numberOfQuestions"
            onChange={(e) => {
              props.update({ id: e.target.id, value: +e.target.value });
            }}
          >
            {" "}
            <option id="numberOfQuestions" value="5">
              .....
            </option>
            {props.numberOfQuestions.map((num) => {
              return (
                <option id="numberOfQuestions" value={num}>
                  {num}
                </option>
              );
            })}
          </select>
        ) : (
          <h3>{props.card.numberOfQuestions}</h3>
        )}
      </div>
      {!props.edit ? (
        <button title={"Save new favorite"} onClick={props.saveFavorite}>
          Save
        </button>
      ) : (
        <button
          title={"Take favorite Quiz"}
          disabled={Object.keys(props.card).length === 0}
          onClick={props.take}
        >
          Take
        </button>
      )}
    </div>
  );
}

export default QuizCardView;
