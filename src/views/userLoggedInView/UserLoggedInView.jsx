import "./userLoggedIn.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

function UserLoggedInView(props) {
  return (
    <div className="userloggedIn">
      <div className="left">
        <div
          className="selectLeft"
          title="Dashbord"
          onClick={props.toDashboard}
        >
          <DashboardOutlinedIcon className="icon" />
          Dashboard
        </div>
        <div
          className="selectLeft"
          title="Take a quiz"
          onClick={props.toGetQuiz}
        >
          <QuizOutlinedIcon className="icon" />
          Take a quiz
        </div>
      </div>
      <div className="right">
        <div className="selectRight" title={props.user.basic.name}>
          <AccountCircleOutlinedIcon className="icon" />
          {props.user.basic.name}
        </div>
        <div className="selectRight" title="logout" onClick={props.toLogout}>
          <LogoutOutlinedIcon className="icon" />
          logout
        </div>
      </div>
    </div>
  );
}

export default UserLoggedInView;
