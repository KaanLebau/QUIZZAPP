class UserModel {
  constructor(name, displayName) {
    this.name = name;
    this.displayName = displayName;
    this.rank = 0;
    this.correct = 0;
    this.wrong = 0;
    this.numberOfQuestions = 0;
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
  updateDispalyName(newDisplayName) {
    this.displayName = newDisplayName;
    this.notifyObservers({ displayNameChanged: newDisplayName });
  }
  updateFavorite(index, favoriteCard) {
    this.favorites[index] = favoriteCard;
    this.notifyObservers({ favoritesChanged: favoriteCard });
  }
}
export default UserModel;
