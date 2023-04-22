import { apiKey } from "../keys";
import Axios from "axios";
import UserQuiz from "../models/UserQuiz";

//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=linux&difficulty=Easy&limit=10

async function getQuestions(query, quizModel) {
  let {category, dificultie, numberOfQuestions} = query.customQuiz
  Axios.get(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}&difficulty=${dificultie}&limit=${numberOfQuestions}`
  )
    .then((response) => {
      let data = response.data;
      quizModel.addquestions(data);
    })
    .catch(console.error);
}

export default getQuestions;
