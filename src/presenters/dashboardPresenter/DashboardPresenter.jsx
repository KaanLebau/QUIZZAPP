import "./dashboardPresenter.scss";
import { useState, useEffect } from "react";
import DashboardSidebarView from "../../views/dashboardSidebarView/DashboardSidebarView";
import CardView from "../../views/cardView/CardView";
import TabPanelPresenter from "../tabPanelPresenter/TabPanelPresenter";
import { categorySummery, userSummary } from "../../models/utilities";
import { doc, updateDoc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

import { useRecoilValue } from "recoil";
import {
  activeUser,
  codeState,
  dockerState,
  linuxState,
  sqlState,
} from "../../models/atoms";
import { updateFirebase } from "../../models/firebaseModel";

function DashboardPresenter() {
  const currentSql = useRecoilValue(sqlState);
  const currentDocker = useRecoilValue(dockerState);
  const currentCode = useRecoilValue(codeState);
  const currentLinux = useRecoilValue(linuxState);
  const theUser = useRecoilValue(activeUser);
  var user = userSummary(
    theUser,
    categorySummery(currentSql),
    categorySummery(currentDocker),
    categorySummery(currentLinux),
    categorySummery(currentCode)
  );
  const [selectedData, setSelectedData] = useState("User");
  const [theTopic, setTheTopic] = useState(user);

  function handleshow(input) {
    setSelectedData(input);
  }

  useEffect(() => {
    update();
  }, [selectedData]);

  function update() {
    switch (selectedData) {
      case "linux":
        setTheTopic(categorySummery(currentLinux));
        break;
      case "sql":
        setTheTopic(categorySummery(currentSql));
        break;
      case "code":
        setTheTopic(categorySummery(currentCode));
        break;
      case "docker":
        setTheTopic(categorySummery(currentDocker));
        break;
      case "user":
        setTheTopic(user);
        break;
      default:
        break;
    }
  }

  function updateFavoritesFirebase() {
    var updatedFavorites = [
      {
        empty: false,
        edit: false,
        category: "sql",
        difficulty: "medium",
        numberOfQuestions: 10,
      },
      {
        empty: false,
        edit: false,
        category: "docker",
        difficulty: "easy",
        numberOfQuestions: 5,
      },
      {
        empty: false,
        edit: false,
        category: "linux",
        difficulty: "hard",
        numberOfQuestions: 15,
      },
      {
        empty: false,
        edit: false,
        category: "code",
        difficulty: "easy",
        numberOfQuestions: 20,
      },
      {
        empty: false,
        edit: false,
        category: "sql",
        difficulty: "easy",
        numberOfQuestions: 15,
      },
    ];
    updateFirebase(theUser.uid, { key: "favorites", value: updatedFavorites });
  }

  async function updateSqlFirebase() {
    var updatedSql = {
      easy: {
        correct: 103,
        wrong: 7,
        noAnswer: 0,
        pass: 10,
        failed: 1,
        category: "SQL",
        difficulty: "Easy",
      },
      medium: {
        correct: 50,
        wrong: 19,
        noAnswer: 1,
        pass: 5,
        failed: 2,
        category: "SQL",
        difficulty: "Medium",
      },
      hard: {
        correct: 20,
        wrong: 30,
        noAnswer: 20,
        pass: 2,
        failed: 5,
        category: "SQL",
        difficulty: "Hard",
      },
    };
    updateFirebase(theUser.uid, { key: "sql", value: updatedSql });
  }

  return (
    <div className="parentPresenter">
      <div className="dashSidebar">
        <DashboardSidebarView setCategory={handleshow} />
      </div>
      {
        <div className="dashContent">
          <CardView data={theTopic} />
          <TabPanelPresenter data={theTopic} />
          <div className="updater">
            <button id="favorites" onClick={updateFavoritesFirebase}>
              Update favorites
            </button>
            <button onClick={updateSqlFirebase}>Update sql </button>

            <button>Update code </button>

            <button>Update linux </button>

            <button>Update docker </button>
          </div>
        </div>
      }
    </div>
  );
}

export default DashboardPresenter;
