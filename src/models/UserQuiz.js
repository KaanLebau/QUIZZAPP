class Question {
  constructor(id, question, answers, correct_answers, category, difficulty) {
    this.id = id;
    this.question = question;
    this.category = category;
    this.difficulty = difficulty;
    this.answered = false;
    this.correct = false;
    this.answer = null;
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
}
class UserQuiz {
  constructor() {
    this.appquestions = [];
  }
  addquestions(apiResponse) {
    this.appquestions = apiResponse.map((theQ) => {
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
    return this.appquestions;
  }
  coutCorrect() {
    let correct = 0;
    let wrong = 0;
    let noAnswer = 0;
    let pass = 0;
    let faild = 0;
    this.appquestions.map((theQ) => {
      if (theQ.answer) {
        correct += 1;
      } else if (!theQ.answer) {
        wrong += 1;
      } else {
        noAnswer += 1;
      }
    });
    correct / this.appquestions.length < 0.8 ? (faild = 1) : (pass = 1);

    return {
      corrext: correct,
      wrong: wrong,
      noAnswer: noAnswer,
      pass: pass,
      faild: faild,
    };
  }
}
export default UserQuiz;
