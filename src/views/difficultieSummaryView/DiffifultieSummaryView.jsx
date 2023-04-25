import RateWidget from "../rateWidgetView/RateWidgetView";
import DataWidget from "../dataWidgetView/DataWidgetView";
import "./difficultySummaryView.scss";
function DiffifultieSummaryView(props) {
  return (
    <div className="diff">
      <label htmlFor="" className="info">
        {props.data.difficulty}
      </label>
      <RateWidget
        info={"Succes Rate"}
        data={(
          (props.data.pass / (props.data.pass + props.data.failed)) *
          100
        ).toFixed(0)}
        noData={isNaN(props.data.pass / (props.data.pass + props.data.failed))}
      />
      <RateWidget
        info={"Question Rate"}
        data={(
          (props.data.correct /
            (props.data.correct + props.data.wrong + props.data.noAnswer)) *
          100
        ).toFixed(0)}
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
