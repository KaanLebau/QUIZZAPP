import { apiKey } from "../keys";
import Axios from "axios";
import UserQuiz from "../models/UserQuiz";

//https://quizapi.io/api/v1/questions?apiKey=YOUR_API_KEY&category=linux&difficulty=Easy&limit=10

async function getQuestions(query) {
  const category = query.category === undefined ? "" : query.category;
  const q = new UserQuiz();
  console.log(query);
  Axios.get(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}&difficulty=${query.difficultie}&limit=${query.numberOfQuestions}`
  )
    .then((response) => {
      let data = response.data;
      let res = q.addquestions(data);
      console.log(res);
    })
    .catch(console.error);
}

export default getQuestions;
