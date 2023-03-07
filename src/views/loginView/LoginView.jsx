import "./loginView.scss";

function LoginView(props) {
  return (
    <div>
      <div className="content">
        <div className="right">
          <h1>Login</h1>
          <div className="row">
            <div className="left">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="right">
              <input
                required
                type="email"
                id={"email"}
                placeholder="john@doe.com"
                onInput={props.}
              />
            </div>
          </div>
          <div className="row">
            <div className="left">
              <label htmlFor="password">Password:</label>
            </div>
            <div className="right">
              <input
                required
                type="password"
                id={"password"}
                placeholder="******"
                onInput={handleInput}
              />
            </div>
          </div>
          {err && <span>Please enter correct email and password</span>}
          <button
            disabled={emailcontroll && passwordControll ? false : true}
            title={
              emailcontroll && passwordControll
                ? "Login"
                : "Email and password is requared"
            }
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>

        <div className="left">
          <h1>Sign up today</h1>
          <p>You have to be a registered user to be able to take quizzes.</p>
          <button title="Sign up" onClick={handleSignup}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
