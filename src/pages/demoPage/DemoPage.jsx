import "./demo.scss";
import { useNavigate } from "react-router-dom";
import { BreakfastDiningRounded } from "@mui/icons-material";
function DemoPage() {
  const navigate = useNavigate();
  function handleSelection(e) {
    switch (e.id) {
      case "registration":
        navigate("../registration");
        break;
      case "login":
        navigate("../login");
        break;
      case "user":
        navigate("../user");
        break;
      case "quizsetting":
        navigate("../user/quiz");
        break;
      case "active":
        navigate("../user/quiz/active");
        break;
      case "result":
        navigate("../user/quiz/result");
        break;

      default:
        break;
    }
  }
  return (
    <div className="Demo">
      <div className="info">
        <h1 className="demoTitle">Demo Page</h1>
        <p>
          This is a demo page that contains links to different pages in the web
          app. The pages contain static data, which later in the project will
          become dynamic. To see different pages click the corresponding button.
          To get back to the demo page, use either the back button in the
          browser or click on Quizit on the page
        </p>
      </div>
      <div className="content">
        <div className="pages">
          <span className="pageName">User Registration</span>
          <button
            className="pageLink"
            id="registration"
            onClick={(e) => handleSelection(e.target)}
          >
            To registration
          </button>
        </div>
        <div className="pages">
          <span className="pageName">User Login</span>
          <button
            className="pageLink"
            id="login"
            onClick={(e) => handleSelection(e.target)}
          >
            To login
          </button>
        </div>
        <div className="pages">
          <span className="pageName">User Dashboard</span>
          <button
            className="pageLink"
            id="user"
            onClick={(e) => handleSelection(e.target)}
          >
            To dashboard
          </button>
        </div>
        <div className="pages">
          <span className="pageName">Quiz form</span>
          <button
            className="pageLink"
            id="quizsetting"
            onClick={(e) => handleSelection(e.target)}
          >
            To quiz form
          </button>
        </div>
        <div className="pages">
          <span className="pageName">Active Quiz</span>
          <button
            className="pageLink"
            id="active"
            onClick={(e) => handleSelection(e.target)}
          >
            To active quiz
          </button>
        </div>
        <div className="pages">
          <span className="pageName">Quiz Result</span>
          <button
            className="pageLink"
            id="result"
            onClick={(e) => handleSelection(e.target)}
          >
            To quiz result
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoPage;
