import { db } from "../firebase";
import { doc, getDoc, updateDoc, setDoc, onSnapshot } from "firebase/firestore";
import { activeUser, authState } from "./atoms";
import { favoritesState } from "./atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { DataArraySharp } from "@mui/icons-material";

async function updateModelFromFirebase(id) {
  const docRef = doc(db, "user", id);
  const docSnap = await getDoc(docRef);

  const unsub = onSnapshot(doc(db, "users", "SF"), (doc) => {
    console.log("Current data: ", doc.data());
  });

  async function updatedModel(payload) {
    if (payload) {
      switch (payload.type) {
        case "displayNameChanged":
          //await updateDoc(theUser, { dispalyName: model.dispalyName });
          break;
        case "favoritesChanged":
          //await updateDoc(theUser, { favorites: model.favorites });
          break;
        case "sqlEasyChanged":
          break;
        case "sqlMediumChanged":
          break;
        case "sqlHardChanged":
          break;
        case "linuxEasyChanged":
          break;
        case "linuxMediumChanged":
          break;
        case "linuxHardChanged":
          break;
        case "codeEasyChanged":
          break;
        case "codeMediumChanged":
          break;
        case "codeHardChanged":
          break;
        case "dockerEasyChanged":
          break;
        case "dockerMediumChanged":
          break;
        case "dockerHardChanged":
          break;

        default:
          break;
      }
    }
  }
}

async function updateFirebase(data) {
  console.log(data);
  /*
  const favRef = doc(db, "users", uid);
  switch (key) {
    case "favorites":
      await updateDoc(favRef, {
        favorites: value,
      });
      break;
    case "sql":
      await updateDoc(favRef, {
        sql: value,
      });
      break;
    case "code":
      await updateDoc(favRef, {
        code: value,
      });
      break;
    case "linux":
      await updateDoc(favRef, {
        linux: value,
      });
      break;
    case "docker":
      await updateDoc(favRef, {
        docker: value,
      });
      break;
    default:
      break;
  }*/
}
async function UpdateFavorites() {
  //const docRef = doc(db, "user", user.uid);
  //const docSnap = await getDoc(docRef);
  //console.log(favorites);
}

export { UpdateFavorites, updateFirebase };
