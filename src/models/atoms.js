import { db } from "../firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { atom, selector, useRecoilValue } from "recoil";
import { InitialUserData } from "./initialUserdata";
import UserModel from "./UserModel";
import { UpdateFavorites } from "../models/firebaseModel";
import { async } from "@firebase/util";
//const model = new UserModel();

export async function FirestoreStorage(key) {
  const user = useRecoilValue(activeUser);
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);
  console.log(key);
  console.log(docSnap);
}

const syncBasicStorageEffect =
  (userID) =>
  ({ setSelf, trigger }) => {
    // Initialize atom value to the remote storage state
    if (trigger === "get") {
      // Avoid expensive initialization
      setSelf(); // Call synchronously to initialize
    }

    // Subscribe to remote storage changes and update the atom value
    //myRemoteStorage.onChange(userID, (userInfo) => {
    //  setSelf(userInfo); // Call asynchronously to change value
    //});

    // Cleanup remote storage subscription
    return () => {
      //myRemoteStorage.onChange(userID, null);
    };
  };

/*
const localForageEffect =
  (key) =>
  ({ setSelf, onSet, trigger }) => {
    // If there's a persisted value - set it on load
    const loadPersisted = async () => {
      const savedValue = await localForage.getItem(key);

      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    };

    // Asynchronously set the persisted data
    if (trigger === "get") {
      loadPersisted();
    }

    // Subscribe to state changes and persist them to localForage
    onSet((newValue, _, isReset) => {
      isReset
        ? localForage.removeItem(key)
        : localForage.setItem(key, JSON.stringify(newValue));
    });
  };
*/

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
      FirestoreStorage(key);
    });
  };

export const activeUser = atom({
  key: "activeUser",
  default: null,
  effects: [
    localStorageEffect("activeUser"),
    ({ onSet }) => {
      onSet((user) => {
        console.log(user);
      });
    },
  ],
});

export const sqlState = atom({
  key: "sqlState",
  default: null,
  effects: [localStorageEffect("sqlState")],
});

export const dockerState = atom({
  key: "dockerState",
  default: null,
  effects: [localStorageEffect("dockerState")],
});
export const linuxState = atom({
  key: "linuxState",
  default: null,
  effects: [localStorageEffect("linuxState")],
});
export const codeState = atom({
  key: "codeState",
  default: null,
  effects: [localStorageEffect("codeState")],
});

export const favoritesState = atom({
  key: "favoritesState",
  default: [
    {
      empty: true,
      edit: false,
      category: "",
      difficulty: "",
      numberOfQuestions: 5,
    },
    {
      empty: true,
      edit: false,
      category: "",
      difficulty: "",
      numberOfQuestions: 5,
    },
    {
      empty: true,
      edit: false,
      category: "",
      difficulty: "",
      numberOfQuestions: 5,
    },
    {
      empty: true,
      edit: false,
      category: "",
      difficulty: "",
      numberOfQuestions: 5,
    },
    {
      empty: true,
      edit: false,
      category: "",
      difficulty: "",
      numberOfQuestions: 5,
    },
  ],
  effects: [localStorageEffect("favoritesState")],
});

export const authState = atom({
  key: "authState",
  default: false,
});

export const registredState = atom({
  key: "registredState",
  default: true,
});

export const activeQuizState = atom({
  key: "activeQuizState",
  default: null,
  effects: [localStorageEffect("activeQuizState")],
});
