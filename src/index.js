import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserModel from "./models/UserModel";
import UserQuiz from "./models/UserQuiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
const model = new UserModel();
const quiz = new UserQuiz();
root.render(
  <React.StrictMode>
    <App model={model} quiz={quiz} />
  </React.StrictMode>
);
