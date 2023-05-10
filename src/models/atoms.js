import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  RemoteStorage,
  UpdateRemoteStorageFromModelFunction,
} from "../integration/RemoteStorage";
import { updateFirebase } from "./firebaseModel";
import { InitialUserData } from "./initialUserdata";

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
const remoteStorageEffect =
  (key) =>
  ({ onSet }) => {
    onSet((newValue) => {
      console.log("before");
      updateFirebase(newValue);
      console.log("after");
    });
  };

export const activeUser = atom({
  key: "activeUser",
  default: InitialUserData,
  effects: [localStorageEffect("activeUser")],
});

//TODO attribudes as selectors
export const basicSelectorState = selector({
  key: "basicSelectorState",
  get: ({ get }) => get(activeUser).basic,
  set: ({ get, set }, newValue) => {
    let userState = get(activeUser);
    userState = { ...userState, sql: newValue };
    set(activeUser, userState);
  },
});

export const sqlSelectorState = selector({
  key: "sqlSelectorState",
  get: ({ get }) => {
    const userState = get(activeUser);
    return userState.sql;
  },
  set: ({ get, set }, newValue) => {
    let userState = get(activeUser);
    userState = { ...userState, sql: newValue };
    set(activeUser, userState);
  },
});

export const dockerSelectorState = selector({
  key: "dockerSelectorState",
  get: ({ get }) => get(activeUser).docker,
  set: ({ get, set }, newValue) => {
    let userState = get(activeUser);
    userState = { ...userState, docker: newValue };
    set(activeUser, userState);
  },
});

export const linuxSelectorState = selector({
  key: "linuxSelectorState",
  get: ({ get }) => get(activeUser).linux,
  set: ({ get, set }, newValue) => {
    let userState = get(activeUser);
    userState = { ...userState, docker: newValue };
    set(activeUser, userState);
  },
});

export const codeSelectorState = selector({
  key: "codeSelectorState",
  get: ({ get }) => get(activeUser).code,
  set: ({ get, set }, newValue) => {
    let userState = get(activeUser);
    userState = { ...userState, code: newValue };
    set(activeUser, userState);
  },
});

export const favoritesSelectorState = selector({
  key: "favoritesSelectorState",
  get: ({ get }) => get(activeUser).favorites,
  set: ({ get, set }, newValue) => {
    let userState = get(activeUser);
    userState = { ...userState, favorites: newValue };
    set(activeUser, userState);
  },
});

export const activeQuizState = atom({
  key: "activeQuizState",
  default: null,
  effects: [localStorageEffect("activeQuizState")],
});

export const basicAtom = atom({
  key: "basicAtom",
  default: {},
  effects: [localStorageEffect("basicAtom")],
});

export const sqlAtom = atom({
  key: "sqlAtom",
  default: {},
  effects: [localStorageEffect("sqlAtom"), remoteStorageEffect("sqlAtom")],
});
export const codeAtom = atom({
  key: "codeAtom",
  default: {},
  effects: [localStorageEffect("codeAtom")],
});
export const linuxAtom = atom({
  key: "linuxAtom",
  default: {},
  effects: [localStorageEffect("linuxAtom"), remoteStorageEffect("linuxAtom")],
});
export const dockerAtom = atom({
  key: "docerAtom",
  default: {},
  effects: [localStorageEffect("docerAtom")],
});
export const favoAtom = atom({
  key: "favoAtom",
  default: [],
  effects: [localStorageEffect("favoAtom")],
});
