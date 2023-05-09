import UserSettingsView from "../../views/userSettingsView/UserSettingsView";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RemoteAuth } from "../../integration/RemoteAuth";
import { RemoteStorage } from "../../integration/RemoteStorage";

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
      await db.populateData(theUser);
    } catch (err) {
      setErr(true);
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
    />
  );
}

export default RegistrationPresenter;
