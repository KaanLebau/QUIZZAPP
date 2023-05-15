import "./chartInfoView.scss";
function ChartInfoView(props) {
  return (
    <div className="chartinfo">
      <div className="row">
        <p className="title">Chart title: </p>
        <p className="data">{props.info.title}</p>
      </div>
      <div className="row">
        <p className="title">Chart type: </p>
        <p className="data">{props.info.chartType}</p>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default ChartInfoView;
