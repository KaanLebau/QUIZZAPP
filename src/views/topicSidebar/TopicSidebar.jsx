import "./topicSidebar.scss";
import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";

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
        <FaCode className="mini" id="user" />
        <FaLinux className="mini" id="user" />
        <FaDatabase className="mini" id="user" />
        <FaDocker className="mini" id="user" />
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
