import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { InitialUserData as userInit } from "../models/initialUserdata";
import { useRecoilValue } from "recoil";
import { userUidState } from "../models/atoms";

function RemoteStorage() {
  const uid = useRecoilValue(userUidState);
  return {
    populateData,
    getRemoteData,
  };

  async function populateData(basic) {
    userInit.basic = basic;
    await setDoc(doc(db, "users", uid), {
      ...userInit,
    });
  }

  async function getRemoteData() {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }
}
export { RemoteStorage };
