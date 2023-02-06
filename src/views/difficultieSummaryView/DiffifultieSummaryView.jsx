import RateWidget from "../../widgets/rateWidget/RateWidget";
import DataWidget from "../../widgets/dataWidget/DataWidget";
import "./difficultieSummaryView.scss";
function DiffifultieSummaryView(props) {
  return (
    <div className="diff">
      <label htmlFor="" className="info">
        {props.data.difficultie}
      </label>
      <RateWidget
        info={"Succes Rate"}
        data={
          (props.data.pass / (props.data.pass + props.failed)).toFixed(2) * 100
        }
        noData={isNaN(props.data.pass / (props.data.pass + props.data.failed))}
      />
      <RateWidget
        info={"Question Rate"}
        data={
          (
            props.data.correct /
            (props.data.correct + props.data.wrong + props.data.noAnswer)
          ).toFixed(2) * 100
        }
        noData={isNaN(
          props.data.correct /
            (props.data.correct + props.data.wrong + props.data.noAnswer)
        )}
      />
      <DataWidget
        info={"Total number of questions"}
        data={props.data.correct + props.data.wrong + props.data.noAnswer}
        noData={isNaN(
          props.data.correct + props.data.wrong + props.data.noAnswer
        )}
      />
    </div>
  );
}

export default DiffifultieSummaryView;
