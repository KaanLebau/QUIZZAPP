import LoginPresenter from "../../presenters/loginPresenter/LoginPresenter";
import HeadPresenter from "../../presenters/headPresenter/HeadPresenter";

function LoginPage() {
  return (
    <div>
      <HeadPresenter />
      <LoginPresenter />
    </div>
  );
}

export default LoginPage;
