import "./app.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//import Welcome from "./pages/welcomePage/Welcome";
import LoginPage from "./pages/loginPage/LoginPage";
import Registration from "./pages/registration/Registration";
import GetQuizDataPage from "./pages/getQuiz/GetQuizDataPage";
import Dashboard from "./pages/dashboard/Dashboard";
import EditUser from "./pages/editUser/EditUser";
import ActiveQuiz from "./pages/activeQuiz/ActiveQuiz";
import DemoPage from "./pages/demoPage/DemoPage";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeUser, registredState } from "./models/atoms";
import Result from "./pages/result/Result";
import UserModel from "./models/UserModel";
function App(props) {
  const model = new UserModel();
 
  const registredUser = true; 
  const Authenticated = ({ children }) => {
    return registredUser ? children : <Navigate to="/" />;
  };

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
                  <Route
                    index
                    element={
                      <Authenticated>
                        <Dashboard model={model} />
                      </Authenticated>
                    }
                  />
                  <Route
                    path="edit"
                    element={
                      <Authenticated>
                        <EditUser />
                      </Authenticated>
                    }
                  />
                  <Route path="quiz">
                    <Route index element={<GetQuizDataPage quiz={props.quiz} />} />
                    <Route
                      path="active"
                      element={
                        <Authenticated>
                          <ActiveQuiz quiz={props.quiz} />
                        </Authenticated>
                      }
                    />
                    <Route
                      path="result"
                      element={
                        <Authenticated>
                          <Result />
                        </Authenticated>
                      }
                    />
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
