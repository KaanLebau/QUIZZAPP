import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

/**
 * Custom auth error 
 */
class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
    this.message = `${message}`;
  }
}

/**
 * This function handles all communication between application and remote authentication.
 * This function provides the following basic functionality for application sing up, sign in, sign out.
 * 
 * @returns 
 */
function RemoteAuth() {
  return {
    signUp,
    signIn,
    logout,
  };

  /**
   *
   * This function creates new users in firebase. 
   * The function receives an obj from the form the user has filled out. 
   * The function saves the new user's uid to the received object and returns.
   *
   * @param {*} basic
   * @returns
   */
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
      switch (err.message) {
        case "Firebase: Error (auth/email-already-in-use)":
          throw new AuthError("This email is already in use");
        case "Firebase: Error (auth/invalid-email)":
          throw new AuthError("invalid email");
        case "Firebase: Error (auth/weak-password)":
          throw new AuthError(
            "The password must be at least 6 characters long. "
          );
        case "Firebase: Error (auth/network-request-failed)":
          throw new AuthError("Network request failed");
        default:
          throw new AuthError("An error occurred. Please try again later.");
      }
    }
  }
  /**
   *
   * This function receives a basic object and logs Firebase authentication with email and password.
   * Parameter has the following structure { email: "", password: ""}
   *
   * the function returns an auth object from Firebase
   *
   * @param {*} user
   * @returns Firebase Auth obj
   */
  async function signIn(user) {
    try {
      const userData = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      return userData;
    } catch (err) {
      switch (err.message) {
        case "Firebase: Error (auth/user-not-found).":
          throw new AuthError(
            "User not found. Please check your email and try again."
          );
        case "Firebase: Error (auth/wrong-password).":
          throw new AuthError("Incorrect password. Please try again.");
        case "Firebase: Error (auth/invalid-email).":
          throw new AuthError(
            "Invalid email address. Please check your email and try again."
          );
        case "Firebase: Error (auth/network-request-failed)":
          throw new AuthError("Network request failed");
        default:
          throw new AuthError("An error occurred. Please try again later.");
      }
    }
  }

  /**
   * This function logs out users from firebase auth
   */
  function logout() {
    signOut(auth)
      .then((resp) => {
        console.log(resp); // Sign-out successful.
      })
      .catch((error) => {
        switch (error.code) {
          case "Firebase: Error (auth/network-request-failed)":
            alert("Network error. Please try again later.");
            break;
          case "Firebase: Error (auth/user-token-expired)":
            alert("Your session has expired. Please sign in again.");
            break;
          case "Firebase: Error (auth/unauthorized-domain)":
            alert("Unauthorized domain. Please sign in again.");
            break;
          default:
            alert("An error occurred. Please try again later.");
        }
      });
  }

  function update(id, params) {}
}
export { RemoteAuth };
