import UserSettings from "../../views/userSettingsView/UserSettingsView";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InitialUserData } from "../../models/initialUserdata";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { addDoc, doc, setDoc } from "firebase/firestore";

function RegistrationPresenter() {
  const navigate = useNavigate();
  const [nameControll, setNameControll] = useState(false);
  const [displayNameControll, setDisplayNameControll] = useState(false);
  const [emailControll, setEmailControll] = useState(false);
  const [passwordControll, setPasswordControll] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [err, setErr] = useState(false);

  const [basic, setBasic] = useState({});
  const [userInit, setUserInit] = useState(InitialUserData);
  function handleCancel() {
    navigate("../");
  }

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
    userInit.basic = basic;
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        userInit.basic.email,
        userInit.basic.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...userInit,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <UserSettings
      input={handleInput}
      nameValidate={nameControll}
      displayNameValidate={displayNameControll}
      emailValidate={emailControll}
      passwordValidate={passwordControll}
      confirm={passwordConfirm}
      cancel={handleCancel}
      create={handleCreate}
      err={err}
    />
  );
}

export default RegistrationPresenter;
