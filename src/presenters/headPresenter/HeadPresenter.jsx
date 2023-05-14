import "./headPresenter.scss";
import UserLoggedIn from "../../views/userLoggedInView/UserLoggedIn";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeUser, registeredUserStateAtom } from "../../models/atoms";
import { useNavigate } from "react-router-dom";
import { RemoteAuth } from "../../integration/RemoteAuth";

function HeadPresenter() {
  const theUser = useRecoilValue(activeUser);
  const [authenticatedUser, setAuthenticatedUser] = useRecoilState(
    registeredUserStateAtom
  );
  const navigate = useNavigate();
  const auth = RemoteAuth();

  function home() {
    navigate("/");
  }
  function toDashboard() {
    console.log("to the dashboard");
    navigate("/user");
  }
  function toLogout() {
    auth.Logout();
    setAuthenticatedUser(false);
    localStorage.clear();
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
        {authenticatedUser ? (
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
