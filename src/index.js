import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import UserModel from "./models/UserModel";
import UserQuiz from "./models/UserQuiz";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
const quiz = new UserQuiz();
//recoil state updateras här
//firebase model ?
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App quiz={quiz} />
    </RecoilRoot>
  </React.StrictMode>
);
