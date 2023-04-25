import { apiKey } from "../keys";
import Axios from "axios";

async function getQuestions(query) {
  console.log(query)
  let {category, dificultie, numberOfQuestions} = query.customQuiz
  return Axios.get(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}&difficulty=${dificultie}&limit=${numberOfQuestions}`
  )
    .then((response) => {
      let resp = response.data
      return resp;
    })
    .catch(console.error);
}

export default getQuestions;
