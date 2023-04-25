import UserSettings from "../../views/userSettingsView/UserSettingsView";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InitialUserData } from "../../models/initialUserdata";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import {
  activeUser,
  authState,
  sqlState,
  dockerState,
  linuxState,
  codeState,
  favoritesState,
} from "../../models/atoms";

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
  const [, setAuth] = useRecoilState(authState);
  const [, setCurentUser] = useRecoilState(activeUser);
  const [, setSqlState] = useRecoilState(sqlState);
  const [, setDockerState] = useRecoilState(dockerState);
  const [, setLinuxState] = useRecoilState(linuxState);
  const [, setCodeState] = useRecoilState(codeState);
  const [, setFavoritesState] = useRecoilState(favoritesState);

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
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        basic.email,
        basic.password
      );
      userInit.basic = basic;
      userInit.basic.uid = res.user.uid;
      await setDoc(doc(db, "users", res.user.uid), {
        ...userInit,
      });
      setAuth(true);
      setCurentUser(userInit.basic);
      setSqlState(userInit.sql);
      setDockerState(userInit.docker);
      setLinuxState(userInit.linux);
      setCodeState(userInit.code);
      setFavoritesState(userInit.favorites);
      navigate("../user");
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
