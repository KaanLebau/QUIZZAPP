import "./head.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { registredState, toggleRegistredState } from "../../models/atoms";
import { useSetRecoilState } from "recoil";

function Head(props) {
  const [logged, setLoged] = useState(props.currentUser);
  const navigate = useNavigate();
  //const logingout = useSetRecoilState(toggleRegistredState);
  async function handleLogout() {
    //logingout();
    /*
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
    //setLoged(!logged);
    */
  }
  function handleLogin() {
    setLoged(!logged);
    console.log("Log in user");
  }

  return (
    <div className="pageHead">
      <Link
        to="/"
        title="Welcome page"
        style={{
          textDecoration: "none",
          width: "100%",
          color: "#dbd8e3",
        }}
      >
        <h2 className="appName">QuizIt</h2>
      </Link>
      {logged ? (
        <div className="navigation">
          <div className="appAlt">
            <Link
              to="/user"
              title="User Dashboard"
              style={{
                textDecoration: "none",
                width: "100%",
                color: "#dbd8e3",
                background: "transparent",
              }}
            >
              <div className="button" title="Dashboard">
                <label htmlFor="">Dashboard</label>
                <DashboardOutlinedIcon className="icon" />
              </div>
            </Link>

            <Link
              to="/user/quiz"
              style={{
                textDecoration: "none",
                width: "100%",
                color: "#dbd8e3",
                background: "transparent",
              }}
            >
              <div className="button" title="Take a quiz">
                <label htmlFor="">Take a quiz</label>
                <QuizOutlinedIcon className="icon" />
              </div>
            </Link>
          </div>
          <div className="userAlt">
            <div className="button">
              <AccountCircleOutlinedIcon className="icon" />
            </div>
            <span title={props.displayname}>{props.displayname}</span>
            <div className="button" title="Edit">
              <EditOutlinedIcon className="icon" />
            </div>
            <div className="button" title="Log out" onClick={handleLogout}>
              <LogoutOutlinedIcon className="icon" title="Log out" />
            </div>
          </div>
        </div>
      ) : (
        <div className="navigation">
          <div className="userAlt" title="">
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                width: "100%",
                color: "#dbd8e3",
                background: "transparent",
              }}
            >
              <div className="button" title="log in" onClick={handleLogin}>
                <NoAccountsOutlinedIcon className="icon" />
                <span>Focus Mode</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Head;
