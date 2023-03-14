import "./infoWidget.scss";
function InfoWidgetView(props) {
  return (
    <div className="info">
      <label htmlFor="">{props.title}</label>
      <div className="data">
        <p>{props.user}</p>
      </div>
    </div>
  );
}

export default InfoWidgetView;
