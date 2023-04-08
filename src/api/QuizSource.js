import { apiKey } from "../keys";
import Axios from "axios";
import UserQuiz from "../models/UserQuiz";

//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=linux&difficulty=Easy&limit=10

async function getQuestions(query) {
  let {category, dificultie, numberOfQuestions} = query.customQuiz
  const q = new UserQuiz();
  Axios.get(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}&difficulty=${dificultie}&limit=${numberOfQuestions}`
  ).then((response) => {
      let data = response.data;
      let res = q.addquestions(data);
      console.log(res);
      console.log(data)
    })
    .catch(console.error);
}

export default getQuestions;
