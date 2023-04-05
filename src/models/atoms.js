import { atom, selector } from "recoil";
import { InitialUserData } from "./initialUserdata";
import UserModel from "./UserModel";
const model = new UserModel();
export const activeUser = atom({
  key: "activeUser",
  default: model,
});

export const favoritesState = atom({
  key: "favoritesState",
  default: [{}, {}, {}, [], {}],
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
