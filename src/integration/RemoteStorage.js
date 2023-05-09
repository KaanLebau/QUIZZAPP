import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { InitialUserData as userInit } from "../models/initialUserdata";
import { useRecoilValue } from "recoil";
import { userUidState } from "../models/atoms";

function RemoteStorage() {
  const uid = useRecoilValue(userUidState);
  return {
    populateData,
    updateModelFromRemoteStrorage,
    updateRemoteStorageFromModel,
  };

  async function populateData(basic) {
    userInit.basic = basic;
    await setDoc(doc(db, "users", uid), {
      ...userInit,
    });
  }

  async function updateModelFromRemoteStrorage() {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  async function updateRemoteStorageFromModel(toUpdate) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    switch (toUpdate.category) {
      case "sql":
        docSnap.sql.update(toUpdate.data);
        break;
      case "docker":
        docSnap.docker.update(toUpdate.data);
        break;
      case "linux":
        docSnap.linux.update(toUpdate.data);
        break;
      case "code":
        docSnap.code.update(toUpdate.data);
        break;
      default:
        break;
    }
  }
}
export { RemoteStorage };
