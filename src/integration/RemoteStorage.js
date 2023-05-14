import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { InitialUserData } from "../models/initialUserdata";
import { useRecoilState } from "recoil";
import { activeUser } from "../models/atoms";
import { useEffect, useState } from "react";

/**
 * This function was created to use recoil related hooks along with database related calls.
 * This function is responsible for writing, reading and updating the firestore database
 * @returns various functions for communicating with the database
 */
function RemoteStorage() {
  /**
   * Global variable active user
   */
  const [userData, setUserData] = useRecoilState(activeUser);

  return {
    populateData,
    updateModelFromRemoteStrorage,
    updateRemoteStorageFromModel,
    useActiveUserListener,
  };

  /**
   * This function is used when a new user is created.
   * The parameter in the function call is the registration form that the new user has filled in.
   * InitialUserData contains the default value for application.
   * The function updates basic user information and creates and writes a new documentation for firestore.
   * Document primary key is same as firebase auth uid.
   * @param {*} userBasic
   * @returns firestore doc
   */
  async function populateData(userBasic) {
    const docRef = doc(db, "users", userBasic.uid);
    await setDoc(docRef, {
      ...InitialUserData,
      basic: userBasic,
    });
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  /**
   * This function is used when a user logs in with email and password in the application.
   * Retrieves and returns the user's document in firestore
   * @param {*} id user.basic.uid
   * @returns
   */
  async function updateModelFromRemoteStrorage(id) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

  /**
   * This function is used when one of the files in the user's document is changed, eg updated favorites or a new quiz result.
   * The function receives an obj with two attributes {field: "" , data: {}},
   * the filed attribute contains the file to be updated
   * data attribute the updated data.
   * @param {*} resultToUpdate
   */
  async function updateRemoteStorageFromModel(resultToUpdate) {
    const docRef = doc(db, "users", userData.basic.uid);
    await updateDoc(docRef, { [resultToUpdate.field]: resultToUpdate.data });
  }

  /**
   * This function is used to sync firestore and application model. The function uses firestore's onSnabshot() function.
   * This takes a snapshot of the document and when something changes in documentation and firestore the document no longer syncs with snapshot.
   * Takes a new snapshot of the document and writes the document to a temporer constant data.
   * Then this data variable was written to the active user Atomen.
   * @returns activeUser atom
   */
  function useActiveUserListener() {
    useEffect(() => {
      const unsub = onSnapshot(doc(db, "users", userData.basic.uid), (doc) => {
        if (doc.exists) {
          const data = {
            basic: doc.data().basic || InitialUserData.basic,
            code: doc.data().code || InitialUserData.code,
            sql: doc.data().sql || InitialUserData.sql,
            docker: doc.data().docker || InitialUserData.docker,
            linux: doc.data().linux || InitialUserData.linux,
            favorites: doc.data().favorites || InitialUserData.favorites,
          };
          setUserData(data);
        } else {
          setUserData(InitialUserData);
        }
      });
    }, [activeUser]);

    // Return the current value of the activeUser atom
    return activeUser;
  }
}

export { RemoteStorage };
