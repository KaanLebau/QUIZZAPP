import "./dashboardSidebarView.scss";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useRecoilValue } from "recoil";
import { activeUser } from "../../models/appModel";
function TopicSidebar(props) {
  const theUser = useRecoilValue(activeUser);
  function getusername() {
    if (theUser === null) {
      return "";
    }
    return theUser.basic.displayName;
  }
  return (
    <div className="sidebar">
      <div
        className={props.selectedData === "user" ? "active" : "button"}
        id="user"
        title="User"
        onClick={(e) => {
          props.setCategory("user");
        }}
      >
        <AccountCircleOutlinedIcon className="icon" />
        <h3>{getusername()}</h3>
      </div>
      <div
        className={props.selectedData === "linux" ? "active" : "button"}
        id="linux"
        title="Linux"
        onClick={(e) => {
          props.setCategory("linux");
        }}
      >
        <FaLinux className="icon" />
        <h3>Linux</h3>
      </div>
      <div
        className={props.selectedData === "docker" ? "active" : "button"}
        id="docker"
        title="Docker"
        onClick={(e) => {
          props.setCategory("docker");
        }}
      >
        <FaDocker className="icon" />
        <h3>Docker</h3>
      </div>
      <div
        className={props.selectedData === "sql" ? "active" : "button"}
        id="sql"
        title="SQL"
        onClick={(e) => {
          props.setCategory("sql");
        }}
      >
        <FaDatabase className="icon" />
        <h3>SQL</h3>
      </div>
      <div
        className={props.selectedData === "code" ? "active" : "button"}
        id="code"
        title="Code"
        onClick={(e) => {
          props.setCategory("code");
        }}
      >
        <FaCode className="icon" />
        <h3>Code</h3>
      </div>
    </div>
  );
}

export default TopicSidebar;
