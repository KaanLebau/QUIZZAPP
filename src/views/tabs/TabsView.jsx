import "./tabsView.scss";

function TabsView(props) {
  function selection(e) {
    props.selectTab(e.target.id);
  }
  return (
    <div className="tabsView">
      {props.data.map((chart, index) => {
        return (
          <div
            id={index}
            onClick={selection}
            className={index === Number(props.active) ? "active" : "tab"}
            title={chart.title}
          >
            {chart.title}
          </div>
        );
      })}
    </div>
  );
}

export default TabsView;
