import "./dashboard.scss";
import HeadPresenter from "../../presenters/headPresenter/HeadPresenter";
import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";

import DashboardPresenter from "../../presenters/dashboardPresenter/DashboardPresenter";
import { useRecoilValue } from "recoil";
import { activeUser } from "../../models/appModel";

function DashboardPage() {
  const user = useRecoilValue(activeUser);

  return (
    <div className="dashboard">
      <HeadPresenter />
      <div className="content">
        {user === null ? (
          <LoadPagePresenter info={"Loading user"} />
        ) : (
          <DashboardPresenter />
        )}
      </div>
    </div>
  );
}

export default DashboardPage;

