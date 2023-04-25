import React, { useState } from "react";
import LoginView from "../../views/loginView/LoginView";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  activeUser,
  authState,
  sqlState,
  dockerState,
  linuxState,
  codeState,
  favoritesState,
  basicUserData,
} from "../../models/atoms";

function LoginPresenter() {
  //tools
  const navigate = useNavigate();

  //global state hooks
  const [, setAuth] = useRecoilState(authState);
  const [, setCurentUser] = useRecoilState(activeUser);
  const [, setFavoritesState] = useRecoilState(favoritesState);
  const [, setSqlState] = useRecoilState(sqlState);
  const [, setDockerState] = useRecoilState(dockerState);
  const [, setLinuxState] = useRecoilState(linuxState);
  const [, setCodeState] = useRecoilState(codeState);
  //user input hooks
  const [user, setUser] = useState({});
  const [emailcontroll, setEmailControll] = useState(false);
  const [passwordControll, setPasswordControll] = useState(false);
  // firebase respons hooks
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

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
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(setLoading(true))
      .then((userCredential) => {
        const firebaseUser = userCredential.user;

        getData(firebaseUser);
      })
      .catch((error) => {
        setErr(true);
      })
      .finally(navigate("/user"));
  }

  async function getData(firebaseUser) {
    const docRef = doc(db, "users", firebaseUser.uid);
    const docSnap = await getDoc(docRef);
    setAuth(true);
    setCurentUser(docSnap.data().basic);
    setSqlState(docSnap.data().sql);
    setDockerState(docSnap.data().docker);
    setLinuxState(docSnap.data().linux);
    setCodeState(docSnap.data().code);
    setFavoritesState(docSnap.data().favorites);
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
      error={err}
    />
  );
}

export default LoginPresenter;
