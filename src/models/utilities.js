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

function userSummary(sql, code, docker, linux) {
  return {
    basicData: {
      topic: "user",
      name: this.name,
      displayName: this.displayName,
      numberOfEasyPass:
        sql.basicData.numberOfEasyPass +
        code.basicData.numberOfEasyPass +
        linux.basicData.numberOfEasyPass +
        docker.basicData.numberOfEasyPass,

      numberOfMediumPass:
        sql.basicData.numberOfMediumPass +
        code.basicData.numberOfMediumPass +
        linux.basicData.numberOfMediumPass +
        docker.basicData.numberOfMediumPass,

      numberOfHardPass:
        sql.basicData.numberOfHardPass +
        code.basicData.numberOfHardPass +
        linux.basicData.numberOfHardPass +
        docker.basicData.numberOfHardPass,

      numberOfPass:
        sql.basicData.numberOfPass +
        code.basicData.numberOfPass +
        linux.basicData.numberOfPass +
        docker.basicData.numberOfPass,
      numberOfFaild:
        sql.basicData.numberOfFaild +
        code.basicData.numberOfFaild +
        linux.basicData.numberOfFaild +
        docker.basicData.numberOfFaild,
      numberOfCorrect:
        sql.basicData.numberOfCorrect +
        code.basicData.numberOfCorrect +
        linux.basicData.numberOfCorrect +
        docker.basicData.numberOfCorrect,
      numberOfWrong:
        sql.basicData.numberOfWrong +
        code.basicData.numberOfWrong +
        linux.basicData.numberOfWrong +
        docker.basicData.numberOfWrong,
      numberOfNoAnswer:
        sql.basicData.numberOfNoAnswer +
        code.basicData.numberOfNoAnswer +
        linux.basicData.numberOfNoAnswer +
        docker.basicData.numberOfNoAnswer,
    },
    chartData: [
      //resultdistributionData:
      {
        chartType: "pie",
        title: "Result distribution",
        labels: ["Pass", "Failed"],
        data: {
          pass:
            sql.basicData.numberOfPass +
            code.basicData.numberOfPass +
            linux.basicData.numberOfPass +
            docker.basicData.numberOfPass,
          failed:
            sql.basicData.numberOfFaild +
            code.basicData.numberOfFaild +
            linux.basicData.numberOfFaild +
            docker.basicData.numberOfFaild,
        },
      },
      //topicdistributionData:
      {
        chartType: "pie",
        title: "Topic distribution",
        labels: ["Sql", "Code", "Linux", "Docker"],
        data: {
          sql: sql.basicData.numberOfPass + sql.basicData.numberOfFaild,
          code: code.basicData.numberOfPass + code.basicData.numberOfFaild,
          linux: linux.basicData.numberOfPass + linux.basicData.numberOfFaild,
          docker:
            docker.basicData.numberOfPass + docker.basicData.numberOfFaild,
        },
      },
      //difficultieDistributionData:
      {
        chartType: "bar",
        title: "Dificultie distribution",
        labels: ["Easy", "Medium", "Hard"],
        data: {
          easy:
            sql.basicData.numberOfEasy +
            code.basicData.numberOfEasy +
            linux.basicData.numberOfEasy +
            docker.basicData.numberOfEasy,
          medium:
            sql.basicData.numberOfMedium +
            code.basicData.numberOfMedium +
            linux.basicData.numberOfMedium +
            docker.basicData.numberOfMedium,
          hard:
            sql.basicData.numberOfHard +
            code.basicData.numberOfHard +
            linux.basicData.numberOfHard +
            docker.basicData.numberOfHard,
        },
      },
      //answerdistributionData:
      {
        chartType: "pie",
        title: "Answers distribution",
        data: {
          correct:
            sql.basicData.numberOfCorrect +
            code.basicData.numberOfCorrect +
            linux.basicData.numberOfCorrect +
            docker.basicData.numberOfCorrect,
          wrong:
            sql.basicData.numberOfWrong +
            code.basicData.numberOfWrong +
            linux.basicData.numberOfWrong +
            docker.basicData.numberOfWrong,
          noAnswer:
            sql.basicData.numberOfNoAnswer +
            code.basicData.numberOfNoAnswer +
            linux.basicData.numberOfNoAnswer +
            docker.basicData.numberOfNoAnswer,
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
