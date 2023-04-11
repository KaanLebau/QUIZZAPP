import React, { useState } from "react";
import LoginView from "../../views/loginView/LoginView";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRecoilState } from "recoil";
import { activeUser } from "../../models/atoms";

function LoginPresenter() {
  const [currentUser, setCurentUser] = useRecoilState(activeUser);
  const [user, setUser] = useState({});
  const [emailcontroll, setEmailControll] = useState(false);
  const [passwordControll, setPasswordControll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

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
  function handleLogin() {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(setLoading(true))
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        getData(user.uid);
      })
      .catch((error) => {
        setErr(true);
      })
      .finally(navigate("/user"));
  }

  async function getData(id) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    setCurentUser(docSnap.data().basic);
    console.log(docSnap.data());
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
