import "./topicCardPresenter.scss";
import TopicCardView from "../../views/topicCardView/TopicCardView";
import { useEffect, useState } from "react";
import TopicSidebar from "../../views/dashboardSidebar/DashboardSidebarView";
import DiffifultieSummaryView from "../../views/difficultieSummaryView/DiffifultieSummaryView";
//import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";
import UserCardView from "../../views/userCardView/UserCardView";

function TopicCardPresenter(props) {
  const [selection, setSelection] = useState("user");
  const [theTopic, setTheTopic] = useState(props.model.userSummary());
  const [easy, setEasy] = useState(props.model.userEasy());
  const [medium, setMedium] = useState(props.model.userMedium());
  const [hard, setHard] = useState(props.model.userHard());

  function handleshow(input) {
    setSelection(input);
  }

  useEffect(() => {
    update();
  }, [selection]);
  function update() {
    switch (selection) {
      case "linux":
        setTheTopic(props.model.categorySummery(props.model.linux));
        setEasy(props.model.linux.easy);
        setMedium(props.model.linux.medium);
        setHard(props.model.linux.hard);
        break;
      case "sql":
        setTheTopic(props.model.categorySummery(props.model.sql));
        setEasy(props.model.sql.easy);
        setMedium(props.model.sql.medium);
        setHard(props.model.sql.hard);
        break;
      case "code":
        setTheTopic(props.model.categorySummery(props.model.code));
        setEasy(props.model.code.easy);
        setMedium(props.model.code.medium);
        setHard(props.model.code.hard);
        break;
      case "docker":
        setTheTopic(props.model.categorySummery(props.model.docker));
        setEasy(props.model.docker.easy);
        setMedium(props.model.docker.medium);
        setHard(props.model.docker.hard);
        //setTheTopic(sum);
        //setEasy(props.model.docker.easy);
        //setMedium(props.model.docker.medium);
        //setHard(props.model.docker.hard);
        break;
      case "user":
        let theUser = props.model.userSummary();
        let theUserEasy = props.model.userEasy();
        let theUserMedium = props.model.userMedium();
        let theUserHard = props.model.userHard();
        setTheTopic(theUser);
        setEasy(theUserEasy);
        setMedium(theUserMedium);
        setHard(theUserHard);
        break;
      default:
        break;
    }
  }

  return (
    <div className="wrapper">
      <div className="left">
        <TopicSidebar setCategory={handleshow} />
      </div>
      <div className="right">
        <div className="difficultieSummary">
          <DiffifultieSummaryView data={easy} difficultie={"Easy"} />
          <DiffifultieSummaryView data={medium} difficultie={"Medium"} />
          <DiffifultieSummaryView data={hard} difficultie={"Hard"} />
        </div>
        <div className="topicSummary">
          {selection === "user" ? (
            <UserCardView data={theTopic} />
          ) : (
            <TopicCardView data={theTopic} />
          )}
        </div>
      </div>
    </div>
  );
}

export default TopicCardPresenter;
