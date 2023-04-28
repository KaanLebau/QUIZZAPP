import React, { useState } from "react";
import LoginView from "../../views/loginView/LoginView";
import { useNavigate } from "react-router-dom";
import { FirebaseActions } from "../../models/firebaseaActions";

function LoginPresenter() {
  //tools
  const navigate = useNavigate();

  //user input hooks
  const [user, setUser] = useState({});
  const [emailcontroll, setEmailControll] = useState(false);
  const [passwordControll, setPasswordControll] = useState(false);
  // firebase respons hooks

  const fireActions = FirebaseActions();

  function handleInput(e) {
    const id = e.id;
    const value = e.value;
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
  async function handleLogin() {
    await fireActions.login(user);
    navigate("/user");
  }

  function handleSignup() {
    navigate("../registration");
  }
  return (
    <LoginView
      handleInput={handleInput}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      controll={passwordControll && emailcontroll}
    />
  );
}

export default LoginPresenter;
