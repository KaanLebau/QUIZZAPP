import { atom, selector } from "recoil";
import { InitialUserData } from "./initialUserdata";
import UserModel from "./UserModel";
//const model = new UserModel();
export const activeUser = atom({
  key: "activeUser",
  default: {
    displayName: "",
    email: "",
    name: "",
    password: "",
  },
});

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

export const favoritesState = atom({
  key: "favoritesState",
  default: [
    {
      empty: true,
      edit: false,
      category: "",
      dificultie: "",
      numberOfQuestions: 5,
    },
    {
      empty: false,
      edit: false,
      category: "Sql",
      dificultie: "Easy",
      numberOfQuestions: 5,
    },
  ],
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
