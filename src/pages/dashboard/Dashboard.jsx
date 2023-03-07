import "./dashboard.scss";
import Head from "../../components/head/Head";
import TopicCardPresenter from "../../presenters/topicCardPresenter/TopicCardPresenter";
import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";
import { mockUser } from "../../models/MockUserData";
import { useState, useEffect } from "react";

function Dashboard(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(setLoading, 800, true);
  }, [props.quiz]);
  return (
    <div className="dashboard">
      <Head currentUser={true} />
      <div className="content">
        {!loading ? (
          <LoadPagePresenter info={"Loading user"} />
        ) : (
          <TopicCardPresenter model={props.model} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
