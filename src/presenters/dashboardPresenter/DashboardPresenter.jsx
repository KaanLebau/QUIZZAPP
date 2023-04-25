import "./dashboardPresenter.scss";
import { useState, useEffect } from "react";
import DashboardSidebarView from "../../views/dashboardSidebarView/DashboardSidebarView";
import CardView from "../../views/cardView/CardView";
import TabPanelPresenter from "../tabPanelPresenter/TabPanelPresenter";
import { categorySummery, userSummary } from "../../models/utilities";

import { useRecoilValue } from "recoil";
import {
  activeUser,
  codeState,
  dockerState,
  linuxState,
  sqlState,
} from "../../models/atoms";

//import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";
//import UserCardView from "../../views/userCardView/UserCardView";
//import TopicCardView from "../../views/topicCardView/TopicCardView";

function DashboardPresenter(props) {
  const currentSql = useRecoilValue(sqlState);
  const currentDocker = useRecoilValue(dockerState);
  const currentCode = useRecoilValue(codeState);
  const currentLinux = useRecoilValue(linuxState);
  const theUser = useRecoilValue(activeUser);
  var user = userSummary(
    theUser,
    categorySummery(currentSql),
    categorySummery(currentDocker),
    categorySummery(currentLinux),
    categorySummery(currentCode)
    );
  const [selectedData, setSelectedData] = useState("User");
  const [theTopic, setTheTopic] = useState(user);
    
  function handleshow(input) {
    setSelectedData(input);
  }

  useEffect(() => {
    update();
  }, [selectedData]);

  function update() {
    switch (selectedData) {
      case "linux":
        setTheTopic(categorySummery(currentLinux));
        break;
      case "sql":
        setTheTopic(categorySummery(currentSql));
        break;
      case "code":
        setTheTopic(categorySummery(currentCode));
        break;
      case "docker":
        setTheTopic(categorySummery(currentDocker));
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
