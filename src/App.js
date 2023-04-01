import "./app.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/welcomePage/Welcome";
import LoginPage from "./pages/loginPage/LoginPage";
import Registration from "./pages/registration/Registration";
import GetQuizDataPage from "./pages/getQuiz/GetQuizDataPage";
import Dashboard from "./pages/dashboard/Dashboard";
import EditUser from "./pages/editUser/EditUser";
import ActiveQuiz from "./pages/activeQuiz/ActiveQuiz";
import DemoPage from "./pages/demoPage/DemoPage";

import Result from "./pages/result/Result";
function App(props) {
  const registred = false;
  return (
    <div className="app">
      <div className="content">
        <div className="left"></div>
        <div className="right">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<DemoPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registration" element={<Registration />} />
                <Route path="/user">
                  <Route index element={<Dashboard model={props.model} />} />
                  <Route path="edit" element={<EditUser />} />
                  <Route path="quiz">
                    <Route
                      index
                      element={<GetQuizDataPage model={props.model} />}
                    />
                    <Route
                      path="active"
                      element={<ActiveQuiz quiz={props.quiz} />}
                    />
                    <Route path="result" element={<Result />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;

/*

<
  );


*/
