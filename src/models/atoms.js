//import { db } from "../firebase";
//import { getDoc, doc, updateDoc } from "firebase/firestore";

import { atom, selector } from "recoil";
import { RemoteStorage } from "../integration/RemoteStorage";
//import { InitialUserData } from "./initialUserdata";
//import UserModel from "./UserModel";
//import { UpdateFavorites } from "../models/firebaseModel";
//const model = new UserModel();

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

//TODO attribudes as atoms

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

//TODO attribudes as selectors
export const basicSelectorState = selector({
  key: "basicSelectorState",
  get: ({ get }) => get(activeUser).basic,
});

export const sqlSelectorState = selector({
  key: "sqlSelectorState",
  get: ({ get }) => get(activeUser).sql,
});

export const dockerSelectorState = selector({
  key: "dockerSelectorState",
  get: ({ get }) => get(activeUser).docker,
});

export const linuxSelectorState = selector({
  key: "linuxSelectorState",
  get: ({ get }) => get(activeUser).linux,
});

export const codeSelectorState = selector({
  key: "codeSelectorState",
  get: ({ get }) => get(activeUser).code,
});

export const favoritesSelectorState = selector({
  key: "favoritesSelectorState",
  get: ({ get }) => get(activeUser).favorites,
});

export const authState = atom({
  key: "authState",
  default: false,
});

export const activeQuizState = atom({
  key: "activeQuizState",
  default: null,
  effects: [localStorageEffect("activeQuizState")],
});

export const userUidState = atom({
  key: "userUidState",
  default: null,
  effects: [
    localStorageEffect("userUidState"),

    ({ onSet }) => {
      onSet((user) => {
        getRemoteStorageData(user);
      });
    },
  ],
});
const dbData = async () => {
  const remoteDB = RemoteStorage();
  const data = await remoteDB.getRemoteData();
  return data;
};

const getRemoteStorageData =
  (key) =>
  async ({ setSelf, onSet, set }) => {
    const data = await dbData();
    console.log(data);
    set("sqlState", data.sql);
    set("linuxState", data.sql);
    set("dockerState", data.sql);
    set("codeState", data.sql);
    set("favoritesState", data.favorites);
  };
