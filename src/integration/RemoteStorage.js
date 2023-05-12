import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { InitialUserData as userInit } from "../models/initialUserdata";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { activeUser } from "../models/atoms";
import { useEffect } from "react";

function RemoteStorage() {
  const [userData, setUserData] = useRecoilState(activeUser);

  return {
    populateData,
    updateModelFromRemoteStrorage,
    updateRemoteStorageFromModel,
    useActiveUserListener,
    updateModelFieldFromRemoteStorage,
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

  async function updateModelFieldFromRemoteStorage(id, field) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    switch (field) {
      case "basic":
        return docSnap.basic;
      case "sql":
        return docSnap.sql;
      case "linux":
        return docSnap.linux;
      case "docker":
        return docSnap.docker;
      case "code":
        return docSnap.code;
      case "favorites":
        return docSnap.favorites;
      default:
        break;
    }
  }

  async function updateRemoteStorageFromModel(resultToUpdate) {
    const docRef = doc(db, "users", userData.basic.uid);
    await updateDoc(docRef, { [resultToUpdate.field]: resultToUpdate.data });
  }

  // Set up a listener for the activeUser document in Firestore
  function useActiveUserListener() {
    useEffect(() => {
      const unsub = onSnapshot(doc(db, "users", userData.basic.uid), (doc) => {
        if (doc.exists) {
          // Update the activeUser atom with the new document data
          const data = {
            basic: doc.data().basic || userInit.basic,
            code: doc.data().code || userInit.code,
            sql: doc.data().sql || userInit.sql,
            docker: doc.data().docker || userInit.docker,
            linux: doc.data().linux || userInit.linux,
            favorites: doc.data().favorites || userInit.favorites,
          };
          setUserData(data);
        } else {
          // Document doesn't exist, so clear the activeUser atom
          setUserData(userInit);
        }
      });

      // Unsubscribe from the listener when the component unmounts
    }, [activeUser]);

    // Return the current value of the activeUser atom
    return activeUser;
  }
}

export { RemoteStorage };
