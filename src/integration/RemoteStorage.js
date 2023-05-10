import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { InitialUserData as userInit } from "../models/initialUserdata";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { activeUser } from "../models/atoms";

function RemoteStorage() {
  const [userData, setUserData] = useRecoilState(activeUser);

  return {
    populateData,
    updateModelFromRemoteStrorage,
    updateRemoteStorageFromModel,
  };

  async function populateData(basic) {
    userInit.basic = basic;
    await setDoc(doc(db, "users", basic.uid), {
      ...userInit,
    });
    setUserData(userInit);
  }

  async function updateModelFromRemoteStrorage(id) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  async function updateRemoteStorageFromModel(resultToUpdate) {
    const docRef = doc(db, "users", userData.basic.uid);
    console.log(resultToUpdate);
    await updateDoc(docRef, { [resultToUpdate.field]: resultToUpdate.data });
  }
}


export { RemoteStorage };
