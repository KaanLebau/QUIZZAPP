import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import {
  activeUser,
  authState,
  sqlState,
  dockerState,
  linuxState,
  codeState,
  favoritesState,
} from "./atoms";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { InitialUserData as userInit } from "./initialUserdata";

export { FirebaseActions };

function FirebaseActions() {
  const [, setAuth] = useRecoilState(authState);
  const [, setCurentUser] = useRecoilState(activeUser);
  const [, setFavoritesState] = useRecoilState(favoritesState);
  const [, setSqlState] = useRecoilState(sqlState);
  const [, setDockerState] = useRecoilState(dockerState);
  const [, setLinuxState] = useRecoilState(linuxState);
  const [, setCodeState] = useRecoilState(codeState);

  return {
    login,
    create,
  };

  async function create(basic) {
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
    } catch (err) {
      console.log(err);
    }
  }

  function login(user) {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const firebaseUser = userCredential.user;
        getData(firebaseUser);
      })
      .catch((error) => {});
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

  function logout() {
    // remove user from local storage, set auth state to null and redirect to login page
    localStorage.removeItem("user");
    setAuth(null);
  }

  function update(id, params) {}
}
