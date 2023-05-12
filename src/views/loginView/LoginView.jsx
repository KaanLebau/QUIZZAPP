import "./loginView.scss";

function LoginView(props) {
  return (
    <div className="login">
      <div className="welcometext">
        <p className="text">
          This project consists of building and deploying a webpage being an
          online quiz application. Users will be able to create their own
          profile using an alias, email and password to be able take different
          quizzes about different programming languages. Results from quizzes
          will saved to firebase and shown at a specific statistics page.
          Questions for each quiz are fetched from the API QuizAPI.
        </p>
      </div>
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
                onInput={(e) =>
                  props.handleInput({ id: e.target.id, value: e.target.value })
                }
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
                onInput={(e) =>
                  props.handleInput({ id: e.target.id, value: e.target.value })
                }
              />
            </div>
          </div>
          <button
            disabled={props.controll ? false : true}
            title={props.controll ? "Login" : "Email and password is requared"}
            onClick={props.handleLogin}
          >
            Log in
          </button>
          {props.err && <span>{props.errMsg}</span>}
        </div>
        <div className="left">
          <h1>Sign up today</h1>
          <p>You have to be a registered user to be able to take quizzes.</p>
          <button title="Sign up" onClick={props.handleSignup}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
