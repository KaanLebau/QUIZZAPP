import { db } from "../firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import UserModel from "./UserModel";
import { activeUser, authState } from "./atoms";
import { favoritesState } from "./atoms";
import { useRecoilState } from "recoil";

async function updateModelFromFirebase(id) {
  const docRef = doc(db, "test", id);
  const docSnap = await getDoc(docRef);

  updateFavorites(docSnap.data().favorites);

  /*
  async function firebaseModelPromise(id) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);




    function makeBigPromiseACB(docSnap) {
      if (!docSnap.exists()) {
        return new UserModel();
      }



      function makeDishPromiseACB(id) {
        return getDishDetails(id);
      }
      const dishesInFirebasePromise = Object.keys(
        firebaseData.val().dishes || []
      ).map(makeDishPromiseACB);

      function createModelACB(dishes) {
        return new DinnerModel(firebaseData.val().numberOfGuests || 2, dishes);
      }
      return Promise.all(dishesInFirebasePromise).then(createModelACB);
    }

    return firebase.database().ref(REF).once("value").then(makeBigPromiseACB);
  }

*/

  async function updateFavorites() {
    const favoritesToUpload = {};
  }

  function updateModelFromFirebase(user) {
    //const [userBasic, setUserBasic] = useRecoilState(activeUser);
    //setUserBasic(user.userBasic);
  }

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
  //model.addObserver(updatedModel);
}

//function updateModel(model) {}
export { updateModelFromFirebase };
