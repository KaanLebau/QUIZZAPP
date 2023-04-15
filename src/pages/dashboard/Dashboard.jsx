import "./dashboard.scss";
import Head from "../../components/head/Head";
import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";
import { useState, useEffect } from "react";
import DashboardPresenter from "../../presenters/dashboardPresenter/DashboardPresenter";
import { useRecoilValue } from "recoil";
import {
  authState,
  codeState,
  dockerState,
  favoritesState,
  linuxState,
  sqlState,
  activeUser,
} from "../../models/atoms";

function Dashboard(props) {
  const [loading, setLoading] = useState(false);
  const userAuth = useRecoilValue(authState);
  const FAVO = useRecoilValue(favoritesState);
  const SQL = useRecoilValue(sqlState);
  const DOCKER = useRecoilValue(dockerState);
  const CODE = useRecoilValue(codeState);
  const LINUX = useRecoilValue(linuxState);
  const BASICDATA = useRecoilValue(activeUser);
  const theList = {
    favorites: FAVO,
    topicSql: SQL,
    topicLinux: LINUX,
    topicDocker: DOCKER,
    topicCode: CODE,
    userData: BASICDATA,
    authState: userAuth,
  };

  useEffect(() => {
    setTimeout(setLoading, 2000, true);
    //console.log(theList);
  }, [props.quiz]);
  return (
    <div className="dashboard">
      <Head currentUser={true} />
      <div className="content">
        {!loading ? (
          <LoadPagePresenter info={"Loading user"} />
        ) : (
          <DashboardPresenter model={props.model} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
