import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { auth } from "../firebase";
import { activeUser } from "../models/atoms";
import { RemoteStorage } from "./RemoteStorage";

function RemoteAuth() {
  return {
    SignIn,
    signUp,
    Logout,
  };

  async function signUp(basic) {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        basic.email,
        basic.password
      );
      basic.uid = res.user.uid;
      return basic;
    } catch (err) {
      console.log(err);
    }
  }

  async function SignIn(user) {
    try {
      const userData = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      return userData;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  function Logout() {
    console.log("hedj");
    const user = useSetRecoilState(activeUser);
    signOut(auth)
      .then((resp) => {
        console.log(resp); // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function update(id, params) {}
}

export { RemoteAuth };
