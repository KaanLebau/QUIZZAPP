import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { atom, selector } from "recoil";
import { InitialUserData } from "./initialUserdata";
import UserModel from "./UserModel";
import effects from "chart.js/dist/helpers/helpers.easing";
//const model = new UserModel();

var firestoreObject;
export async function firestoreStorage(id) {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  firestoreObject = docSnap.data();
}

const syncBasicStorageEffect =
  (userID) =>
  ({ setSelf, trigger }) => {
    // Initialize atom value to the remote storage state
    if (trigger === "get") {
      // Avoid expensive initialization
      setSelf(firestoreObject.basic); // Call synchronously to initialize
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

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  };
export const basicUserData = selector({
  key: "basicUserData",
  get: (id) => async () => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().basic;
  },
});

export const activeUser = atom({
  key: "activeUser",
  default: null,
  effects: [
    localStorageEffect("activeUser"),
    ({ onSet, setSelf }) => {
      onSet((user) => {});
    },
  ],
});

export const activeQuizState = atom({
  key: "activeQuizState",
  default: null,
  effects: [localStorageEffect("sqlState")],
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
      difficultie: "",
      numberOfQuestions: 5,
    },
    {
      empty: true,
      edit: false,
      category: "",
      difficultie: "",
      numberOfQuestions: 5,
    },
    {
      empty: true,
      edit: false,
      category: "",
      difficultie: "",
      numberOfQuestions: 5,
    },
    {
      empty: true,
      edit: false,
      category: "",
      difficultie: "",
      numberOfQuestions: 5,
    },
    {
      empty: true,
      edit: false,
      category: "",
      difficultie: "",
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
