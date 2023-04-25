import "./dashboard.scss";
import Head from "../../components/head/Head";
import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";
import { useState, useEffect } from "react";
import DashboardPresenter from "../../presenters/dashboardPresenter/DashboardPresenter";

function Dashboard() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(setLoading, 2000, true);
  }, []);
  return (
    <div className="dashboard">
      <Head currentUser={true} />
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
