import "./app.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import RegistrationPage from "./pages/registrationPage/RegistrationPage";
import GetQuizDataPage from "./pages/getQuizPage/GetQuizDataPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import EditUserPage from "./pages/editUserPage/EditUserPage";
import ActiveQuizPage from "./pages/activeQuizPage/ActiveQuizPage";
import { useRecoilValue } from "recoil";
import { registeredUserStateAtom } from "./models/appModel";
import ResultPage from "./pages/resultPage/ResultPage";

function App() {
  const Authenticated = useRecoilValue(registeredUserStateAtom);

  const AuthRequired = ({ children }) => {
    return Authenticated ? children : <Navigate to="/" />;
  };

  return (
    <div className="app">
      <div className="content">
        <div className="left"></div>
        <div className="right">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<LoginPage />} />
                <Route path="registration" element={<RegistrationPage />} />
                <Route path="/user">
                  <Route
                    index
                    element={
                      <AuthRequired>
                        <DashboardPage />
                      </AuthRequired>
                    }
                  />
                  <Route
                    path="edit"
                    element={
                      <AuthRequired>
                        <EditUserPage />
                      </AuthRequired>
                    }
                  />
                  <Route path="quiz">
                    <Route
                      index
                      element={
                        <AuthRequired>
                          <GetQuizDataPage />
                        </AuthRequired>
                      }
                    />
                    <Route
                      path="active"
                      element={
                        <AuthRequired>
                          <ActiveQuizPage />
                        </AuthRequired>
                      }
                    />
                    <Route
                      path="result"
                      element={
                        <AuthRequired>
                          <ResultPage />
                        </AuthRequired>
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
