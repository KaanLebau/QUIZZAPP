import React, { useState } from "react";
import LoginView from "../../views/loginView/LoginView";
import { useNavigate } from "react-router-dom";
import { RemoteAuth } from "../../integration/RemoteAuth";
import { useRecoilState } from "recoil";
import { activeUser, userUidState } from "../../models/atoms";
import { RemoteStorage } from "../../integration/RemoteStorage"; //TODO remove

function LoginPresenter() {
  //tools
  const navigate = useNavigate();

  //user input hooks
  const [user, setUser] = useState({});
  const [emailcontroll, setEmailControll] = useState(false);
  const [passwordControll, setPasswordControll] = useState(false);
  const auth = RemoteAuth();
  const storage = RemoteStorage(); //TODO remove
  const [, setRemoteUserData] = useRecoilState(userUidState);
  const [active, setActiveUser] = useRecoilState(activeUser);

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
      const id = await auth.SignIn(user);
      const test = id.user.uid;
      setRemoteUserData(test);
      const db = await storage.getRemoteData(); //TODO remove
      setActiveUser(db);
      console.log(active); //TODO remove
    } catch (err) {
      console.error("not in logged" + err);
    } finally {
      navigate("../user");
    }
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
