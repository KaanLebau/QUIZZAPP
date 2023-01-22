import "./topicCardPresenter.scss";
import TopicCardView from "../../views/topicCardView/TopicCardView";
import { useState } from "react";
import TopicSidebar from "../../views/topicSidebar/TopicSidebar";

function TopicCardPresenter(props) {
  const [data, setData] = useState(props.data.docker);
  const [, reRender] = useState({});
  function handleshow(input) {
    switch (input) {
      case "linux":
        setData(props.data.linux);
        reRender({});
        break;
      case "sql":
        setData(props.data.sql);
        break;
      case "docker":
        setData(props.data.docker);
        break;
      case "code":
        setData(props.data.code);
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
        <TopicCardView topic={data} />
      </div>
    </div>
  );
}

export default TopicCardPresenter;
