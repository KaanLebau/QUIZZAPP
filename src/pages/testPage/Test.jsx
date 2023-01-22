import React from "react";
import { useNavigate } from "react-router-dom";
import "./test.scss";

function Test(props) {
  const navigate = useNavigate();
  function handleTest1() {
    console.log("easy");
    console.log(props.model.sql.easy);
    props.model.updateSqlEasy({
      correct: 22,
      wrong: 12,
      noAnswer: 10,
      pass: 3,
      failed: 2,
    });
    console.log(props.model.sql.easy);
    console.log("medium");
    console.log(props.model.sql.medium);
    props.model.updateSqlMedium({
      correct: 2,
      wrong: 1,
      noAnswer: 11,
      pass: 0,
      failed: 2,
    });
    console.log(props.model.sql.medium);
    console.log("HARD");
    console.log(props.model.sql.hard);
    props.model.updateSqlHard({
      correct: 32,
      wrong: 1,
      noAnswer: 1,
      pass: 1,
      failed: 0,
    });
    console.log(props.model.sql.hard);
    navigate("/user");
  }
  function handleTest2() {
    console.log("easy");
    console.log(props.model.docker.easy);
    props.model.updateDockerEasy({
      correct: 42,
      wrong: 0,
      noAnswer: 8,
      pass: 5,
      failed: 0,
    });
    console.log(props.model.docker.easy);
    console.log("medium");
    console.log(props.model.docker.medium);
    props.model.updateDockerMedium({
      correct: 22,
      wrong: 13,
      noAnswer: 1,
      pass: 2,
      failed: 1,
    });
    console.log(props.model.docker.medium);
    console.log("HARD");
    console.log(props.model.docker.hard);
    props.model.updateDockerHard({
      correct: 0,
      wrong: 0,
      noAnswer: 0,
      pass: 0,
      failed: 0,
    });
    console.log(props.model.docker.hard);
    navigate("/user");
  }
  function handleTest3() {}
  function handleTest4() {}

  return (
    <div className="test">
      <button onClick={handleTest1}>test 1 update sql</button>
      <button onClick={handleTest2}>test 2 update Docker</button>
      <button onClick={handleTest3}>test 3 update Code</button>
      <button onClick={handleTest4}>test 4 update Linux</button>
    </div>
  );
}

export default Test;
