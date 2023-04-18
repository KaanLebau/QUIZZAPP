import "./dashboardSidebarView.scss";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useRecoilValue } from "recoil";
import { activeUser } from "../../models/atoms";
function TopicSidebar(props) {
  return (
    <div className="sidebar">
      <div
        className="button"
        id="user"
        title="User"
        onClick={(e) => {
          props.setCategory("user");
        }}
      >
        <AccountCircleOutlinedIcon className="icon" />
        {/*<h3>{user.displayName}</h3>*/}
      </div>
      <div
        className="button"
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
        className="button"
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
        className="button"
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
        className="button"
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
