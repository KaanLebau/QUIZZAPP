import "./infoWidget.scss";
function InfoWidget(props) {
  return (
    <div className="info">
      <label htmlFor="">{props.title}</label>
      <div className="data">
        <p>{props.user}</p>
      </div>
    </div>
  );
}

export default InfoWidget;
