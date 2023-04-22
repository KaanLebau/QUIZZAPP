import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { atom, selector } from "recoil";
import { InitialUserData } from "./initialUserdata";
import UserModel from "./UserModel";
//const model = new UserModel();
const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue) => {
      localStorage.setItem("user", JSON.stringify(newValue));
    });
  };
export const activeUser = atom({
  key: "activeUser",
  default: null,
  effects: [
    localStorageEffect("activeUser"),
    ({ onSet }) => {
      onSet((user) => {});
    },
  ],
});

export const basicUserData = selector({
  key: "basicUserData",
  get: (id) => async () => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data().basic;
  },
});

/*
export const activeUserSetter = selector({
  key: "activeUserSetter",
  set: ({ set }, basic) => {
    set((activeUser.displayName = basic.displayName));
    set((activeUser.name = basic.name));
    set((activeUser.email = basic.email));
    set((activeUser.password = basic.password));
  },
  get: ({ get }) => {},
});
*/
export const sqlState = atom({
  key: "sqlState",
  default: {},
});
export const dockerState = atom({
  key: "dockerState",
  default: {},
});
export const linuxState = atom({
  key: "linuxState",
  default: {},
});
export const codeState = atom({
  key: "codeState",
  default: {},
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
});

export const authState = atom({
  key: "authState",
  default: false,
});

/*
export const updateActiveUser = selector({
  key: "updateUser",
  set: (user, { set, get }) => {
    const u = get(activeUser);
    set(activeUser, user);
  },
});
*/

export const registredState = atom({
  key: "registredState",
  default: true,
});

/*
export const toggleRegistredState = selector({
  key: "registredToggle",
  set: ({ get, set }) => {
    const currentRegistredValue = get(registredState);
    set(registredState, !currentRegistredValue);
  },
});
*/
