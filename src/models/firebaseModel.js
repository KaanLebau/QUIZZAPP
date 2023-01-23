import { db } from "../firebase";
import { doc, increment, updateDoc } from "firebase/firestore";

function updateFirebase(model) {
  const theUser = doc(db, "users", model.uid);
  async function updatedModel(payload) {
    if (payload) {
      switch (payload.type) {
        case "displayNameChanged":
          await updateDoc(theUser, { dispalyName: model.dispalyName });
          break;
        case "favoritesChanged":
          await updateDoc(theUser, { favorites: model.favorites });
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
  model.addObserver(updatedModel);
}

function updateModel(model) {}
export { updateFirebase };
