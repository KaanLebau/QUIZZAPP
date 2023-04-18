import "./dashboardPresenter.scss";
import { useState, useEffect } from "react";
import DashboardSidebarView from "../../views/dashboardSidebarView/DashboardSidebarView";
import CardView from "../../views/cardView/CardView";
import TabPanelPresenter from "../tabPanelPresenter/TabPanelPresenter";
import { useRecoilValue } from "recoil";
import { activeUser } from "../../models/atoms";

//import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";
//import UserCardView from "../../views/userCardView/UserCardView";
//import TopicCardView from "../../views/topicCardView/TopicCardView";

function DashboardPresenter(props) {
  var user = props.model.userSummary();
  const [selectedData, setSelectedData] = useState("User");
  const [theTopic, setTheTopic] = useState(props.model.userSummary());

  function handleshow(input) {
    setSelectedData(input);
  }

  useEffect(() => {
    update();
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
      {
        <div className="dashContent">
          <CardView data={theTopic} />
          <TabPanelPresenter data={theTopic} />
        </div>
      }
    </div>
  );
}

export default DashboardPresenter;
