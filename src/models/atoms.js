import { atom, selector } from "recoil";

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

  get: ({ get }) => get(activeUser).sql,
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

export const registeredUserStateAtom = atom({
  key: "registeredUserStateAtom",
  default: false,
  effects: [localStorageEffect("registeredUserStateAtom")],
});
