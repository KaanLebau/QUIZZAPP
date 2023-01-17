import "./sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

function Sidebar(props) {
  return (
    <div className={props.currentUser ? "pageSidebar" : "hidden"}>
      <div title="Dashboard">
        <DashboardOutlinedIcon />
        <span>Dashboard</span>
      </div>
      <div title="Take a quiz">
        <QuizOutlinedIcon />
        <span>Take a quiz</span>
      </div>
    </div>
  );
}

export default Sidebar;
