import { db } from "../firebase";
import { updateDoc, increment } from "firebase/firestore";

function updateFirebase(model) {
  async function updatedModel(payload) {
    if (payload) {
      switch (payload.type) {
        case "displayNameChanged":
          break;
        case "favoritesChanged":
          break;
        case "sqlEasyChanged":
            const toUpdate = doc(db,)
          await updateDoc(easy, {
            wrong: increment(result.wrong),
            correct: increment(result.correct),
            noAnswer: increment(result.noAnswer),
            pass: increment(result.pass),
            faild: increment(result.faild),
          });
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
