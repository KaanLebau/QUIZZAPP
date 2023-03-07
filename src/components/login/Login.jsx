
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import "./login.scss";

function Login() {
  const [user, setUser] = useState({});
  const [emailcontroll, setEmailControll] = useState(false);
  const [passwordControll, setPasswordControll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  function handleInput(e) {
    const id = e.target.id;
    const value = e.target.value;
    switch (id) {
      case "email":
        setEmailControll(true);
        setUser({ ...user, [id]: value });
        break;
      case "password":
        setPasswordControll(true);
        setUser({ ...user, [id]: value });
        break;
      default:
    }
    setUser({ ...user, [id]: value });
  }
  function handleLogin() {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(setLoading(true))
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setErr(true);
      })
      .finally(navigate("/user"));
  }
  function handleSignup() {
    navigate("../registration");
  }
  return (
    <div className="login">
      {loading ? (
        <div className="spinner">
          <CircularProgress className="icon" />
          <p>logging in please be patient and wait</p>
        </div>
      ) : (
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
                  onInput={handleInput}
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
      )}
    </div>
  );
}

export default Login;
