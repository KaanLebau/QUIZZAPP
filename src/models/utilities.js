const difficultyAlternatives = ["Easy", "Medium", "Hard"];

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
      //resultByDifficultyDistribution:
      {
        chartType: "radar",
        title: "Difficulty result distribution",
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
      //difficultyDistributionData:
      {
        chartType: "pie",
        title: "Difficulty distribution",
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
      //difficultyDistributionData:
      {
        chartType: "bar",
        title: "Difficulty distribution",
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

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

class Question {
  constructor(id, question, answers, correct_answers, category, difficulty) {
    this.id = id;
    this.question = question;
    this.category = category;
    this.difficulty = difficulty;
    this.answered = false;
    this.correct = false;
    this.answer = -1;
    this.answers = this.copyAnswers(answers, correct_answers);
  }
  copyAnswers(answers, correct_answers) {
    var appQuestion = [];
    const answerSize = Object.keys(answers).length;
    const ansverList = Object.values(answers);
    const resultList = Object.values(correct_answers);
    for (var i = 0; i < answerSize; i++) {
      if (ansverList[i] !== null) {
        appQuestion.push({
          id: i,
          answer: ansverList[i],
          isCorrect: resultList[i],
        });
      }
    }
    return appQuestion;
  }
  setAnswer(index) {
    this.answer = index;
  }
}

function addQuestions(listOfQuestions) {
  return listOfQuestions.map((theQ) => {
    const { id, question, answers, correct_answers, category, difficulty } =
      theQ;
    return new Question(
      id,
      question,
      answers,
      correct_answers,
      category,
      difficulty
    );
  });
}

function correctQuiz(theQuiz) {
  let correct = 0;
  let wrong = 0;
  let noAnswer = 0;
  let passedQuiz = false;
  let ratio = 0.0;

  theQuiz.questions.forEach((q) => {
    if (q.answered) {
      if (q.answers[q.answer].isCorrect === "true") {
        correct += 1;
      } else {
        wrong += 1;
      }
    } else {
      noAnswer += 1;
    }
  });

  ratio = correct / theQuiz.questions.length;
  if (ratio >= 0.8) {
    passedQuiz = true;
  }
  return {
    category: theQuiz.category,
    difficulty: theQuiz.difficulty,
    correct: correct,
    wrong: wrong,
    noAnswers: noAnswer,
    passed: passedQuiz,
    successRatio: ratio,
    chartData: {
      chartType: "pie",
      title: "Answers distribution",
      labels: ["Correct", "Wrong", "No answer"],
      data: {
        correct: correct,
        wrong: wrong,
        noAnswer: noAnswer,
      },
    },
  };
}

function updateUser(user, result) {
  function selectCategory() {
    switch (result.category) {
      case "SQL":
        return user.sql;
      case "Code":
        return user.code;
      case "Docker":
        return user.docker;
      case "linux":
        return user.linux;
      default:
        break;
    }
  }
  function updateDifficulty(difficulty) {
    let correct = difficulty.correct + result.correct;
    let wrong = difficulty.wrong + result.wrong;
    let noAnswer = difficulty.noAnswer + result.noAnswers;
    let pass = difficulty.pass;
    let failed = difficulty.failed;
    if (result.passed) {
      pass += 1;
    } else {
      failed += 1;
    }
    return {
      correct: correct,
      wrong: wrong,
      noAnswer: noAnswer,
      pass: pass,
      failed: failed,
      category: difficulty.category,
      difficulty: difficulty.difficulty,
    };
  }
  let category = selectCategory();
  let updatedStats;
  let updatedCategory;
  let updatedDifficulty;
  switch (result.difficulty) {
    case "Easy":
      updatedDifficulty = updateDifficulty(category.easy);
      updatedCategory = { ...category, easy: updatedDifficulty };
      break;
    case "Medium":
      updatedDifficulty = updateDifficulty(category.medium);
      updatedCategory = { ...category, medium: updatedDifficulty };
      break;
    case "Hard":
      updatedDifficulty = updateDifficulty(category.hard);
      updatedCategory = { ...category, hard: updatedDifficulty };
      break;
    default:
      break;
  }
  updatedStats = { ...user, [result.category.toLowerCase()]: updatedCategory };
  return updatedStats;
}

export {
  replaceItemAtIndex,
  difficultyAlternatives,
  topicAlternatives,
  questionAternatives,
  categorySummery,
  userSummary,
  addQuestions,
  correctQuiz,
  Question,
  updateUser,
};
