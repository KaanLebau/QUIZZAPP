import React from "react";
import ChartInfoView from "../../views/chartInfoView/ChartInfoView";

function ChartInfoPresenter(props) {
  return <ChartInfoView info={props.info} />;
}

export default ChartInfoPresenter;
