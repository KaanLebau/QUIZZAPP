import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { auth } from "../firebase";
import { userUidState } from "../models/atoms";
import { RemoteStorage } from "./RemoteStorage";

function RemoteAuth() {
  return {
    SignIn,
    signUp,
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

  function logout() {}

  function update(id, params) {}
}

export { RemoteAuth };
