import { apiKey } from "../keys";
import Axios from "axios";

async function getQuestions(query) {
  let {category, difficulty, numberOfQuestions} = query
  return Axios.get(
    `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&category=${category}&difficulty=${difficulty}&limit=${numberOfQuestions}`
  )
    .then((response) => {
      let resp = response.data
      return resp;
    })
    .catch(console.error);
}

export default getQuestions;
