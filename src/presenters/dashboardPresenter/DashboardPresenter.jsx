import "./dashboardPresenter.scss";
import DashboardSidebarView from "../../views/dashboardSidebar/DashboardSidebarView";
import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";
import { useState, useEffect } from "react";
import UserCardView from "../../views/userCardView/UserCardView";
import TopicCardView from "../../views/topicCardView/TopicCardView";

import CardView from "../../views/cardView/CardView";
import TabPanelPresenter from "../tabPanelPresenter/TabPanelPresenter";

function DashboardPresenter(props) {
  var user = props.model.userSummary();
  const [selectedData, setSelectedData] = useState("User");
  const [theTopic, setTheTopic] = useState(props.model.userSummary());
  const [, reRender] = useState();
  const [loading, setLoading] = useState(false);

  function handleshow(input) {
    setSelectedData(input);
    setLoading(true);
    console.log(loading);
  }
  function sendData() {
    setTimeout(setLoading, 800, true);
    console.log(loading);
  }

  useEffect(() => {
    update();
    sendData();
  }, [selectedData]);

  function update() {
    switch (selectedData) {
      case "linux":
        setTheTopic(props.model.categorySummery(props.model.linux));
        break;
      case "sql":
        setTheTopic(props.model.categorySummery(props.model.sql));
        break;
      case "code":
        setTheTopic(props.model.categorySummery(props.model.code));
        break;
      case "docker":
        setTheTopic(props.model.categorySummery(props.model.docker));
        break;
      case "user":
        setTheTopic(user);
        break;
      default:
        break;
    }
  }

  return (
    <div className="parentPresenter">
      <div className="dashSidebar">
        <DashboardSidebarView setCategory={handleshow} />
      </div>
      {!loading ? (
        <LoadPagePresenter info={"rerender"} />
      ) : (
        <div className="dashContent">
          {}
          <CardView data={theTopic} />
          <TabPanelPresenter data={theTopic} />
        </div>
      )}
    </div>
  );
}

export default DashboardPresenter;
