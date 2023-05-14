import UserSettingsView from "../../views/userSettingsView/UserSettingsView";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RemoteAuth } from "../../integration/RemoteAuth";
import { RemoteStorage } from "../../integration/RemoteStorage";
import { useSetRecoilState } from "recoil";
import { activeUser, registeredUserStateAtom } from "../../models/atoms";

function RegistrationPresenter() {
  // react-router-dom tools
  const navigate = useNavigate();
  //Integration layer
  const auth = RemoteAuth();
  const db = RemoteStorage();
  //user Info hook
  const [basic, setBasic] = useState({});

  //user input check
  const [nameControll, setNameControll] = useState(false);
  const [displayNameControll, setDisplayNameControll] = useState(false);
  const [emailControll, setEmailControll] = useState(false);
  const [passwordControll, setPasswordControll] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  //Recoil
  const user = useSetRecoilState(activeUser);
  const userLoggedIn = useSetRecoilState(registeredUserStateAtom);

  function handleInput(input) {
    const id = input.id;
    const value = input.value;
    switch (id) {
      case "name":
        if (value.length > 0) {
          setNameControll(true);
          setBasic({ ...basic, [id]: value });
        }
        if (value.length === 0) setNameControll(false);
        break;
      case "displayName":
        if (input.value.length > 0) {
          setDisplayNameControll(true);
          setBasic({ ...basic, [id]: value });
        }
        if (input.value.length === 0) setDisplayNameControll(false);
        break;
      case "email":
        if (input.value.includes("@") && input.value.includes(".com")) {
          setEmailControll(true);
          setBasic({ ...basic, [id]: value });
        }
        if (
          !input.value.includes("@") ||
          !input.value.includes(".com") ||
          input.value.length === 0
        )
          setEmailControll(false);
        break;
      case "password":
        if (input.value.length >= 6) {
          setPasswordControll(true);
          if (input.value === basic.passwordValidation)
            setPasswordConfirm(true);
          setBasic({ ...basic, [id]: value });
        }

        if (input.value.length < 6) {
          setPasswordControll(false);
        }
        break;
      case "passwordValidation":
        if (input.value === basic.password) {
          setPasswordConfirm(true);
        }
        if (input.value !== basic.password) setPasswordConfirm(false);
        break;

      default:
        break;
    }
  }

  async function handleCreate() {
    try {
      const theUser = await auth.signUp(basic);
      const userData = await db.populateData(theUser);
      if (!userData && !theUser) {
        throw new Error("failed");
      }
      user(userData);
      userLoggedIn(true);
    } catch (err) {
      setErr(true);
      setErrMsg(err.message);
    } finally {
      navigate("../user");
    }
  }
  return (
    <UserSettingsView
      input={handleInput}
      nameValidate={nameControll}
      displayNameValidate={displayNameControll}
      emailValidate={emailControll}
      passwordValidate={passwordControll}
      confirm={passwordConfirm}
      cancel={() => {
        navigate("../");
      }}
      create={handleCreate}
      err={err}
      errMsg={errMsg}
    />
  );
}

export default RegistrationPresenter;
