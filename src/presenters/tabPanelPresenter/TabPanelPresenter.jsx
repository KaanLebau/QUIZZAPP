import "./tabPanelPresenter.scss";
import React, { useEffect } from "react";
import TabView from "../../views/tabView/TabView";
import TabsView from "../../views/tabs/TabsView";
import ChartPresenter from "../chartPresenter/ChartPresenter";
import { useState } from "react";
function TabPanelPresenter(props) {
  const [activeTab, SetActiveTab] = useState(0);
  const [chartData, setChartData] = useState(props.data.chartData[activeTab]);
  function selectedTab(e) {
    SetActiveTab(e);
  }
  function update() {
    setChartData(props.data.chartData[activeTab]);
  }
  useEffect(() => {
    update();
  }, [activeTab]);

  return (
    <div className="tabPanelPresenter">
      <div className="tabs">
        <TabsView
          data={props.data.chartData}
          active={activeTab}
          selectTab={selectedTab}
        />
      </div>
      <div className="chart">
        <div className="chartInfo">here is some text info about chart</div>
        <div className="theChart">
          <ChartPresenter chartData={chartData} />
        </div>
      </div>
    </div>
  );
}

export default TabPanelPresenter;