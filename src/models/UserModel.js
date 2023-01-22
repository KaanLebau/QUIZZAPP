class UserModel {
  constructor(name, displayName) {
    this.name = name;
    this.displayName = displayName;
    this.correct = 0;
    this.wrong = 0;
    this.noAnswer = 0;
    this.failed = 0;
    this.pass = 0;
    this.difficultie = ["Easy", "Medium", "Hard"];
    this.topic = ["linux", "SQL", "Code", "Docker"];
    this.favorites = [
      { category: "SQL", difficultie: "Easy", numberOfQuestions: 10 },
      {},
      {},
      {},
      {},
    ];
    this.observers = [];
    this.sql = {
      easy: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "SQL",
        difficultie: "Easy",
      },
      medium: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "SQL",
        difficultie: "Medium",
      },
      hard: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "SQL",
        difficultie: "Hard",
      },
    };
    this.docker = {
      easy: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "Docker",
        difficultie: "Easy",
      },
      medium: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "Docker",
        difficultie: "Medium",
      },
      hard: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "Docker",
        difficultie: "Hard",
      },
    };
    this.linux = {
      easy: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "Linux",
        difficultie: "Easy",
      },
      medium: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "Linux",
        difficultie: "Medium",
      },
      hard: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "Linux",
        difficultie: "Hard",
      },
    };
    this.code = {
      easy: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "Code",
        difficultie: "Easy",
      },
      medium: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
        category: "Code",
        difficultie: "Medium",
      },
      hard: {
        correct: 0,
        wrong: 0,
        pass: 0,
        noAnswer: 0,
        failed: 0,
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

  updateTotalfail;
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
}
export default UserModel;
