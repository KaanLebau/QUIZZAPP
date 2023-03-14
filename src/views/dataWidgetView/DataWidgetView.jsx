import "./dataWidget.scss";
import { MdHideSource } from "react-icons/md";

function DataWidgetView(props) {
  return (
    <div className={props.noData ? "noData" : "rateWidget"}>
      <div className="noDataIcon">
        <MdHideSource className="noIcon" />
        No data available
      </div>
      <div className="up">{props.info}</div>
      <div className="down">{props.data}</div>
    </div>
  );
}

export default DataWidgetView;
