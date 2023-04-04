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
class UserQuiz {
  constructor() {
    this.appQuestions = [];
  }
  addquestions(apiResponse) {
    this.appQuestions = apiResponse.map((theQ) => {
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
    
    correctQuiz() {
    let correct = 0;
    let wrong = 0;
    let noAnswer = 0;
    let passedQuiz = false;
    let ratio = 0.0;

    this.appQuestions.forEach(q => {
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

    ratio = correct / (correct + wrong + noAnswer)
    if (ratio >= 0.8) {
      passedQuiz = true;
    }

    return {
              correctAnswers: correct,
              wrongAnswers: wrong,
              noAnswers: noAnswer,
              passedQuiz: passedQuiz,
              successRatio: ratio
    }
  }
}
export default UserQuiz;