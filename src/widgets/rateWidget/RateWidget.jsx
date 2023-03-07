import "./rateWidget.scss";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";
import { MdHideSource } from "react-icons/md";

function RateWidget(props) {
  return (
    <div className={props.noData ? "noData" : "rateWidget"}>
      <div className="noDataIcon">
        <MdHideSource className="noIcon" />
        No data available
      </div>
      <div className="up">{props.info}</div>
      {props.data < 50 ? (
        <div className="down">
          <div className="left">{props.data} %</div>
          <div className="right">
            <BsGraphDown className="icon" />
          </div>
        </div>
      ) : (
        <div className="down">
          <div className="left">{props.data}%</div>
          <div className="right">
            <BsGraphUp className="icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default RateWidget;
