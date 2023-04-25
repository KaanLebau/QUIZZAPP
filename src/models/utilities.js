const difficultieAlternatives = ["Easy", "Medium", "Hard"];

const topicAlternatives = ["linux", "SQL", "Code", "Docker"];

const questionAternatives = [5, 10, 15, 20];

function categorySummery(topic) {
  var theTopic = topic.easy.category;
  var numberOfEasyPass = topic.easy.pass;
  var numberOfMediumPass = topic.medium.pass;
  var numberOfHardPass = topic.hard.pass;
  var numberOfEasy = topic.easy.pass + topic.easy.failed;
  var numberOfMedium = topic.medium.pass + topic.medium.failed;
  var numberOfHard = topic.hard.pass + topic.hard.failed;
  var numberOfPass = topic.easy.pass + topic.medium.pass + topic.hard.pass;
  var numberOfFaild =
    topic.easy.failed + topic.medium.failed + topic.hard.failed;
  var numberOfCorrect =
    topic.easy.correct + topic.medium.correct + topic.hard.correct;
  var numberOfWrong = topic.easy.wrong + topic.medium.wrong + topic.hard.wrong;
  var numberOfNoAnswer =
    topic.easy.noAnswer + topic.medium.noAnswer + topic.hard.noAnswer;
  return {
    basicData: {
      topic: theTopic,
      numberOfEasyPass: numberOfEasyPass,
      numberOfEasy: numberOfEasy,
      numberOfMediumPass: numberOfMediumPass,
      numberOfMedium: numberOfMedium,
      numberOfHardPass: numberOfHardPass,
      numberOfHard: numberOfHard,
      numberOfPass: numberOfPass,
      numberOfFaild: numberOfFaild,
      numberOfCorrect: numberOfCorrect,
      numberOfWrong: numberOfWrong,
      numberOfNoAnswer: numberOfNoAnswer,
    },
    chartData: [
      //resultdistributionData:
      {
        chartType: "doughnut",
        title: "Result distribution",
        labels: ["Pass", "Failed"],
        data: {
          pass: numberOfPass,
          failed: numberOfFaild,
        },
      },
      //resultByDifficultieDistribution:
      {
        chartType: "radar",
        title: "Dificultie result distribution",
        labels: ["Easy", "Medium", "Hard"],
        data: {
          pass: [numberOfEasyPass, numberOfMediumPass, numberOfHardPass],
          failed: [
            numberOfEasy - numberOfEasyPass,
            numberOfMedium - numberOfMediumPass,
            numberOfHard - numberOfHardPass,
          ],
        },
      },
      //difficultieDistributionData:
      {
        chartType: "pie",
        title: "Dificultie distribution",
        labels: ["Easy", "Medium", "Hard"],
        data: {
          easy: numberOfEasy,
          medium: numberOfMedium,
          hard: numberOfHard,
        },
      },
      //answerData:
      {
        chartType: "pie",
        title: "Answers distribution",
        labels: ["Correct", "Wrong", "No answer"],
        data: {
          correct: numberOfCorrect,
          wrong: numberOfWrong,
          noAnswer: numberOfNoAnswer,
        },
      },
    ],
  };
}

function userSummary(basic, sql, code, docker, linux) {
  var numberOfSql = sql.basicData.numberOfPass + sql.basicData.numberOfFaild;
  var numberOfCode = code.basicData.numberOfPass + code.basicData.numberOfFaild;
  var numberOfLinux =
    linux.basicData.numberOfPass + linux.basicData.numberOfFaild;
  var numberOfDocker =
    docker.basicData.numberOfPass + docker.basicData.numberOfFaild;
  var numberOfEasy =
    sql.basicData.numberOfEasy +
    code.basicData.numberOfEasy +
    linux.basicData.numberOfEasy +
    docker.basicData.numberOfEasy;
  var numberOfMedium =
    sql.basicData.numberOfMedium +
    code.basicData.numberOfMedium +
    linux.basicData.numberOfMedium +
    docker.basicData.numberOfMedium;
  var numberOfHard =
    sql.basicData.numberOfHard +
    code.basicData.numberOfHard +
    linux.basicData.numberOfHard +
    docker.basicData.numberOfHard;

  var numberOfEasyPass =
    sql.basicData.numberOfEasyPass +
    code.basicData.numberOfEasyPass +
    linux.basicData.numberOfEasyPass +
    docker.basicData.numberOfEasyPass;
  var numberOfMediumPass =
    sql.basicData.numberOfMediumPass +
    code.basicData.numberOfMediumPass +
    linux.basicData.numberOfMediumPass +
    docker.basicData.numberOfMediumPass;
  var numberOfHardPass =
    sql.basicData.numberOfHardPass +
    code.basicData.numberOfHardPass +
    linux.basicData.numberOfHardPass +
    docker.basicData.numberOfHardPass;
  var numberOfPass =
    sql.basicData.numberOfPass +
    code.basicData.numberOfPass +
    linux.basicData.numberOfPass +
    docker.basicData.numberOfPass;
  var numberOfFaild =
    sql.basicData.numberOfFaild +
    code.basicData.numberOfFaild +
    linux.basicData.numberOfFaild +
    docker.basicData.numberOfFaild;
  var numberOfCorrect =
    sql.basicData.numberOfCorrect +
    code.basicData.numberOfCorrect +
    linux.basicData.numberOfCorrect +
    docker.basicData.numberOfCorrect;

  var numberOfWrong =
    sql.basicData.numberOfWrong +
    code.basicData.numberOfWrong +
    linux.basicData.numberOfWrong +
    docker.basicData.numberOfWrong;
  var numberOfNoAnswer =
    sql.basicData.numberOfNoAnswer +
    code.basicData.numberOfNoAnswer +
    linux.basicData.numberOfNoAnswer +
    docker.basicData.numberOfNoAnswer;

  return {
    basicData: {
      topic: "user",
      name: basic.name,
      displayName: basic.displayName,
      numberOfEasyPass: numberOfEasyPass,
      numberOfMediumPass: numberOfMediumPass,
      numberOfHardPass: numberOfHardPass,
      numberOfPass: numberOfPass,
      numberOfFaild: numberOfFaild,
      numberOfCorrect: numberOfCorrect,
      numberOfWrong: numberOfWrong,
      numberOfNoAnswer: numberOfNoAnswer,
    },
    chartData: [
      //resultdistributionData:
      {
        chartType: "pie",
        title: "Result distribution",
        labels: ["Pass", "Failed"],
        data: {
          pass: numberOfPass,
          failed: numberOfFaild,
        },
      },

      //topicdistributionData:
      {
        chartType: "pie",
        title: "Topic distribution",
        labels: ["Sql", "Code", "Linux", "Docker"],
        data: {
          sql: numberOfSql,
          code: numberOfCode,
          linux: numberOfLinux,
          docker: numberOfDocker,
        },
      },
      //difficultieDistributionData:
      {
        chartType: "bar",
        title: "Dificultie distribution",
        labels: ["Easy", "Medium", "Hard"],
        data: {
          easy: numberOfEasy,
          medium: numberOfMedium,
          hard: numberOfHard,
        },
      },
      //answerdistributionData:
      {
        chartType: "pie",
        title: "Answers distribution",
        data: {
          correct: numberOfCorrect,
          wrong: numberOfWrong,
          noAnswer: numberOfNoAnswer,
        },
      },
    ],
  };
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export {
  replaceItemAtIndex,
  difficultieAlternatives,
  topicAlternatives,
  questionAternatives,
  categorySummery,
  userSummary,
};
