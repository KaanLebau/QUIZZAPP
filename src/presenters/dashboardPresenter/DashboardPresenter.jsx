import "./dashboardPresenter.scss";
import { useState, useEffect } from "react";
import DashboardSidebarView from "../../views/dashboardSidebarView/DashboardSidebarView";
import CardView from "../../views/cardView/CardView";
import TabPanelPresenter from "../tabPanelPresenter/TabPanelPresenter";
import { categorySummery, userSummary } from "../../models/utilities";

import { useRecoilValue } from "recoil";
import {
  activeUser,
  codeSelectorState,
  dockerSelectorState,
  linuxSelectorState,
  sqlSelectorState,
} from "../../models/appModel";

function DashboardPresenter() {
  const currentSql = useRecoilValue(sqlSelectorState);
  const currentDocker = useRecoilValue(dockerSelectorState);
  const currentCode = useRecoilValue(codeSelectorState);
  const currentLinux = useRecoilValue(linuxSelectorState);
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
  }, [
    selectedData,
    currentSql,
    currentDocker,
    currentCode,
    currentLinux,
    theUser,
  ]);

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
