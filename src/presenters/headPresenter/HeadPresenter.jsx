import "./headPresenter.scss";
import UserLoggedIn from "../../views/userLoggedInView/UserLoggedIn";
import { useRecoilValue } from "recoil";
import { activeUser } from "../../models/atoms";
import { useNavigate } from "react-router-dom";

function HeadPresenter() {
  const theUser = useRecoilValue(activeUser);
  const navigate = useNavigate();

  function home() {
    navigate("/");
  }
  function toDashboard() {
    console.log("to the dashboard");
    navigate("/user");
  }
  function toLogout() {
    console.log("logoutuser");
    navigate("/");
  }
  function toGetQuiz() {
    console.log("to get quiz");
    navigate("/user/quiz");
  }
  return (
    <div className="headPresenter">
      <div className="appName" onClick={home}>
        QUIZIT
      </div>
      <div className="options">
        {theUser !== null ? (
          <UserLoggedIn
            user={theUser}
            toDashboard={toDashboard}
            toLogout={toLogout}
            toGetQuiz={toGetQuiz}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default HeadPresenter;
