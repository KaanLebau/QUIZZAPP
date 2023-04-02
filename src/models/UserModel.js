class UserModel {
  constructor(name, displayName) {
    this.name = "Kaan"; //TODO remove
    this.displayName = "LebaU"; //TODO remove
    this.correct = 0;
    this.wrong = 0;
    this.noAnswer = 0;
    this.failed = 0;
    this.pass = 0;
    this.difficultie = ["Easy", "Medium", "Hard"];
    this.topic = ["linux", "SQL", "Code", "Docker"];
    this.favorites = [
      { category: "SQL", difficultie: "Easy", numberOfQuestions: 10 },
      { category: "", difficultie: "", numberOfQuestions: 0 },
      { category: "", difficultie: "", numberOfQuestions: 0 },
      { category: "", difficultie: "", numberOfQuestions: 0 },
      { category: "", difficultie: "", numberOfQuestions: 0 },
    ];
    this.observers = [];
    this.sql = {
      easy: {
        correct: 56,
        wrong: 12,
        pass: 20,
        noAnswer: 10,
        failed: 1,
        category: "SQL",
        difficultie: "Easy",
      },
      medium: {
        correct: 12,
        wrong: 2,
        pass: 2,
        noAnswer: 0,
        failed: 12,
        category: "SQL",
        difficultie: "Medium",
      },
      hard: {
        correct: 8,
        wrong: 1,
        pass: 2,
        noAnswer: 1,
        failed: 1,
        category: "SQL",
        difficultie: "Hard",
      },
    };
    this.docker = {
      easy: {
        correct: 30,
        wrong: 5,
        pass: 3,
        noAnswer: 5,
        failed: 1,
        category: "Docker",
        difficultie: "Easy",
      },
      medium: {
        correct: 13,
        wrong: 4,
        pass: 1,
        noAnswer: 3,
        failed: 1,
        category: "Docker",
        difficultie: "Medium",
      },
      hard: {
        correct: 0,
        wrong: 6,
        pass: 0,
        noAnswer: 4,
        failed: 1,
        category: "Docker",
        difficultie: "Hard",
      },
    };
    this.linux = {
      easy: {
        correct: 72,
        wrong: 6,
        pass: 7,
        noAnswer: 2,
        failed: 1,
        category: "Linux",
        difficultie: "Easy",
      },
      medium: {
        correct: 10,
        wrong: 0,
        pass: 0,
        noAnswer: 5,
        failed: 1,
        category: "Linux",
        difficultie: "Medium",
      },
      hard: {
        correct: 6,
        wrong: 2,
        pass: 1,
        noAnswer: 1,
        failed: 0,
        category: "Linux",
        difficultie: "Hard",
      },
    };
    this.code = {
      easy: {
        correct: 30,
        wrong: 6,
        pass: 3,
        noAnswer: 4,
        failed: 1,
        category: "Code",
        difficultie: "Easy",
      },
      medium: {
        correct: 3,
        wrong: 2,
        pass: 0,
        noAnswer: 5,
        failed: 5,
        category: "Code",
        difficultie: "Medium",
      },
      hard: {
        correct: 14,
        wrong: 5,
        pass: 1,
        noAnswer: 0,
        failed: 1,
        category: "Code",
        difficultie: "Hard",
      },
    };
  }
  addObserver(obs) {
    this.observers = [...this.observers, obs];
  }
  notifyObservers(payload) {
    try {
      function invokeObserverCB(obs) {
        obs(payload);
      }
      this.observers.forEach(invokeObserverCB);
    } catch (err) {
      console.error(err);
    }
  }
  removeObserver(obsToRemove) {
    function hasSameObserverCB(obs) {
      if (obs !== obsToRemove) return obs;
    }
    this.observers = this.observers.filter(hasSameObserverCB);
  }

  addSql(sql) {
    this.sql = sql;
  }
  addLinux(linux) {
    this.linux = linux;
  }
  addDocker(docker) {
    this.docker = docker;
  }

  addCode(code) {
    this.code = code;
  }
  updateDispalyName(newDisplayName) {
    this.displayName = newDisplayName;
    this.notifyObservers({ displayNameChanged: newDisplayName });
  }
  updateFavorite(index, favoriteCard) {
    this.favorites[index] = favoriteCard;
    this.notifyObservers({ favoritesChanged: favoriteCard });
  }

  updateTotalUserState(result) {
    this.correct += result.correct;
    this.wrong += result.wrong;
    this.noAnswer += result.noAnswer;
    this.pass += result.pass;
    this.failed += result.failed;
    this.notifyObservers({ newUserStats: result });
  }

  updateSqlEasy(result) {
    this.sql.easy.correct += result.correct;
    this.sql.easy.wrong += result.wrong;
    this.sql.easy.noAnswer += result.noAnswer;
    this.sql.easy.pass += result.pass;
    this.sql.easy.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ sqlEasyChanged: result });
  }
  updateSqlMedium(result) {
    this.sql.medium.correct += result.correct;
    this.sql.medium.wrong += result.wrong;
    this.sql.medium.noAnswer += result.noAnswer;
    this.sql.medium.pass += result.pass;
    this.sql.medium.failed += result.failed;
    this.updateTotalUserState(result);

    this.notifyObservers({ sqlMediumChanged: result });
  }
  updateSqlHard(result) {
    this.sql.hard.correct += result.correct;
    this.sql.hard.wrong += result.wrong;
    this.sql.hard.noAnswer += result.noAnswer;
    this.sql.hard.pass += result.pass;
    this.sql.hard.failed += result.failed;
    this.updateTotalUserState(result);

    this.notifyObservers({ sqlHardChanged: result });
  }
  updateLinuxEasy(result) {
    this.linux.easy.correct += result.correct;
    this.linux.easy.wrong += result.wrong;
    this.linux.easy.noAnswer += result.noAnswer;
    this.linux.easy.pass += result.pass;
    this.linux.easy.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ linuxEasyChanged: result });
  }
  updateLinuxMedium(result) {
    this.linux.medium.correct += result.correct;
    this.linux.medium.wrong += result.wrong;
    this.linux.medium.noAnswer += result.noAnswer;
    this.linux.medium.pass += result.pass;
    this.linux.medium.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ linuxMediumChanged: result });
  }
  updateLinuxHard(result) {
    this.linux.hard.correct += result.correct;
    this.linux.hard.wrong += result.wrong;
    this.linux.hard.noAnswer += result.noAnswer;
    this.linux.hard.pass += result.pass;
    this.linux.hard.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ linuxHardChanged: result });
  }
  updateCodeEasy(result) {
    this.code.easy.correct += result.correct;
    this.code.easy.wrong += result.wrong;
    this.code.easy.noAnswer += result.noAnswer;
    this.code.easy.pass += result.pass;
    this.code.easy.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ codeEasyChanged: result });
  }
  updateCodeMedium(result) {
    this.code.medium.correct += result.correct;
    this.code.medium.wrong += result.wrong;
    this.code.medium.noAnswer += result.noAnswer;
    this.code.medium.pass += result.pass;
    this.code.medium.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ codeMediumChanged: result });
  }
  updateCodeHard(result) {
    this.code.hard.correct += result.correct;
    this.code.hard.wrong += result.wrong;
    this.code.hard.noAnswer += result.noAnswer;
    this.code.hard.pass += result.pass;
    this.code.hard.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ codeHardChanged: result });
  }
  updateDockerEasy(result) {
    this.docker.easy.correct += result.correct;
    this.docker.easy.wrong += result.wrong;
    this.docker.easy.noAnswer += result.noAnswer;
    this.docker.easy.pass += result.pass;
    this.docker.easy.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ dockerEasyChanged: this.docker.easy });
  }
  updateDockerMedium(result) {
    this.docker.medium.correct += result.correct;
    this.docker.medium.wrong += result.wrong;
    this.docker.medium.noAnswer += result.noAnswer;
    this.docker.medium.pass += result.pass;
    this.docker.medium.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ dockerMediumChanged: this.docker.medium });
  }
  updateDockerHard(result) {
    this.docker.hard.correct += result.correct;
    this.docker.hard.wrong += result.wrong;
    this.docker.hard.noAnswer += result.noAnswer;
    this.docker.hard.pass += result.pass;
    this.docker.hard.failed += result.failed;
    this.updateTotalUserState(result);
    this.notifyObservers({ dockerHardChanged: this.docker.hard });
  }

  categorySummery(topic) {
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
    var numberOfWrong =
      topic.easy.wrong + topic.medium.wrong + topic.hard.wrong;
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
          chartType: "pie",
          title: "Result distribution",
          data: {
            pass: numberOfPass,
            failed: numberOfFaild,
          },
        },
        //resultByDifficultieDistribution:
        {
          chartType: "bar",
          title: "Dificultie result distribution V1",
          data: {
            easy: [numberOfEasyPass, numberOfEasy - numberOfEasyPass],
            medium: [numberOfMediumPass, numberOfMedium - numberOfMediumPass],
            hard: [numberOfHardPass, numberOfHard - numberOfHardPass],
          },
        },
        {
          chartType: "bar",
          title: "Dificultie result distribution V2",
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
          data: {
            correct: numberOfCorrect,
            wrong: numberOfWrong,
            noAnswer: numberOfNoAnswer,
          },
        },
      ],
    };
  }

  userEasy() {
    return {
      correct:
        this.sql.easy.correct +
        this.linux.easy.correct +
        this.docker.easy.correct +
        this.code.easy.correct,
      wrong:
        this.sql.easy.wrong +
        this.linux.easy.wrong +
        this.docker.easy.wrong +
        this.code.easy.wrong,
      pass:
        this.sql.easy.pass +
        this.linux.easy.pass +
        this.docker.easy.pass +
        this.code.easy.pass,
      noAnswer:
        this.sql.easy.noAnswer +
        this.linux.easy.noAnswer +
        this.docker.easy.noAnswer +
        this.code.easy.noAnswer,
      failed:
        this.sql.easy.failed +
        this.linux.easy.failed +
        this.docker.easy.failed +
        this.code.easy.failed,
      category: "Linux",
      difficultie: "Easy",
    };
  }
  userMedium() {
    return {
      correct:
        this.sql.medium.correct +
        this.linux.medium.correct +
        this.docker.medium.correct +
        this.code.medium.correct,
      wrong:
        this.sql.medium.wrong +
        this.linux.medium.wrong +
        this.docker.medium.wrong +
        this.code.medium.wrong,
      pass:
        this.sql.medium.pass +
        this.linux.medium.pass +
        this.docker.medium.pass +
        this.code.medium.pass,
      noAnswer:
        this.sql.medium.noAnswer +
        this.linux.medium.noAnswer +
        this.docker.medium.noAnswer +
        this.code.medium.noAnswer,
      failed:
        this.sql.medium.failed +
        this.linux.medium.failed +
        this.docker.medium.failed +
        this.code.medium.failed,
      category: "Linux",
      difficultie: "medium",
    };
  }
  userHard() {
    return {
      correct:
        this.sql.hard.correct +
        this.linux.hard.correct +
        this.docker.hard.correct +
        this.code.hard.correct,
      wrong:
        this.sql.hard.wrong +
        this.linux.hard.wrong +
        this.docker.hard.wrong +
        this.code.hard.wrong,
      pass:
        this.sql.hard.pass +
        this.linux.hard.pass +
        this.docker.hard.pass +
        this.code.hard.pass,
      noAnswer:
        this.sql.hard.noAnswer +
        this.linux.hard.noAnswer +
        this.docker.hard.noAnswer +
        this.code.hard.noAnswer,
      failed:
        this.sql.hard.Failed +
        this.linux.hard.Failed +
        this.docker.hard.Failed +
        this.code.hard.Failed,
      category: "Linux",
      difficultie: "hard",
    };
  }
  userSummary() {
    var sql = this.categorySummery(this.sql);
    var code = this.categorySummery(this.code);
    var docker = this.categorySummery(this.docker);
    var linux = this.categorySummery(this.linux);
    return {
      basicData: {
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
}
export default UserModel;
