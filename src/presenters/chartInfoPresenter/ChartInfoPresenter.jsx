import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { RemoteStorage } from "../../integration/RemoteStorage";
import { activeUser, sqlAtom, sqlSelectorState } from "../../models/atoms";
import ChartInfoView from "../../views/chartInfoView/ChartInfoView";

function ChartInfoPresenter(props) {
  const user = useRecoilValue(activeUser);
  const db = RemoteStorage();
  //const [sql, setSql] = useRecoilState(sqlSelectorState);
  const setSql = useSetRecoilState(sqlSelectorState);
  function update() {
    const newSql = {
      easy: {
        correct: 10,
        wrong: 10,
        noAnswer: 20,
        pass: 20,
        failed: 20,
        category: "Sql",
        difficulty: "Easy",
      },
      medium: {
        correct: 10,
        wrong: 10,
        noAnswer: 0,

        pass: 0,
        failed: 0,
        category: "Sql",
        difficulty: "Medium",
      },
      hard: {
        correct: 0,
        wrong: 0,
        noAnswer: 0,

        pass: 0,
        failed: 0,
        category: "Sql",
        difficulty: "Hard",
      },
    };
    setSql(newSql);
    //console.table(user.sql);
    //db.updateRemoteStorageFromModel({ field: "sql", data: user.sql });
  }
  function populate(){
    db.populateData({name: "kaan", displayName: "Lebau"})
  }

  useEffect(() => {
    db.updateRemoteStorageFromModel({ field: "sql", data: user.sql });
  }, [user]);

  return <ChartInfoView info={props.info} test={update} populte={populate}/>;
}

export default ChartInfoPresenter;
