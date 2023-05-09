import "./dashboard.scss";
import HeadPresenter from "../../presenters/headPresenter/HeadPresenter";
import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";
import { useState, useEffect } from "react";
import DashboardPresenter from "../../presenters/dashboardPresenter/DashboardPresenter";
import { useRecoilValue } from "recoil";
import { sqlSelectorState } from "../../models/atoms";

function Dashboard() {
  const currentSqlSelectorState = useRecoilValue(sqlSelectorState);
  console.log(currentSqlSelectorState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(setLoading, 2000, true);
  }, []);
  return (
    <div className="dashboard">
      <HeadPresenter />
      <div className="content">
        {!loading ? (
          <LoadPagePresenter info={"Loading user"} />
        ) : (
          <DashboardPresenter />
        )}
      </div>
    </div>
  );
}

export default Dashboard;

/*
     




*/
