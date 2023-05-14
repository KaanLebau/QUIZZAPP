import React, { useState } from "react";
import LoginView from "../../views/loginView/LoginView";
import { useNavigate } from "react-router-dom";
import { RemoteAuth } from "../../integration/RemoteAuth";
import { useRecoilState } from "recoil";
import { activeUser, registeredUserStateAtom } from "../../models/atoms";
import { RemoteStorage } from "../../integration/RemoteStorage"; 
function LoginPresenter() {
  //tools
  const navigate = useNavigate();

  //user input hooks
  const [user, setUser] = useState({});
  const [emailcontroll, setEmailControll] = useState(false);
  const [passwordControll, setPasswordControll] = useState(false);

  //Error handling
  const [errMsg, setErrMsg] = useState("");
  const [err, setErr] = useState(false);

  const auth = RemoteAuth();
  const storage = RemoteStorage();

  //Global state
  const [, authenticatedUser] = useRecoilState(activeUser);
  const [, UserLoggedIn] = useRecoilState(registeredUserStateAtom);

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
    try {
      const id = await auth.signIn(user);
      const db = await storage.updateModelFromRemoteStrorage(id.user.uid);

      authenticatedUser(db);
      UserLoggedIn(true);
      toDashboard();
    } catch (err) {
      setErr(true);
      setErrMsg(err.message);
    }
  }
  function toDashboard() {
    navigate("../user");
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
      err={err}
      errMsg={errMsg}
    />
  );
}

export default LoginPresenter;
