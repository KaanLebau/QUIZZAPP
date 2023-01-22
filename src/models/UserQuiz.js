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
        appQuestion.push({ answer: ansverList[i], isCorrect: resultList[i] });
      }
    }
    return appQuestion;
  }
}
class UserQuiz {
  addquestions(apiResponse) {
    return apiResponse.map(this.copy);
  }
  copy(apiQuestion) {
    const { id, question, answers, correct_answers, category, difficulty } =
      apiQuestion;
    return new Question(
      id,
      question,
      answers,
      correct_answers,
      category,
      difficulty
    );
  }
}
export default UserQuiz;
