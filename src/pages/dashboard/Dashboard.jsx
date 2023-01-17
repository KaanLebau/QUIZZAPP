import "./dashboard.scss";
import Head from "../../components/head/Head";
import TopicCardPresenter from "../../presenters/topicCardPresenter/TopicCardPresenter";
import { mockUser } from "../../models/MockUserData";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <Head currentUser={true} />
      <div className="content">
        <TopicCardPresenter data={mockUser} />
      </div>
    </div>
  );
}

export default Dashboard;
