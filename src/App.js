import "./app.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import Registration from "./pages/registration/Registration";
import GetQuizDataPage from "./pages/getQuiz/GetQuizDataPage";
import Dashboard from "./pages/dashboard/Dashboard";
import EditUser from "./pages/editUser/EditUser";
import ActiveQuiz from "./pages/activeQuiz/ActiveQuiz";
import DemoPage from "./pages/demoPage/DemoPage";
import { useRecoilValue } from "recoil";
import { registeredUserStateAtom } from "./models/atoms";
import Result from "./pages/result/Result";
import { useEffect } from "react";
import { RemoteStorage } from "./integration/RemoteStorage";

function App(props) {
  const Authenticated = useRecoilValue(registeredUserStateAtom);
  const db = RemoteStorage();
  //db.useActiveUserListener();
  //const currentUser = useRecoilValue(activeUser);

  useEffect(() => {
    if (Authenticated) {
      //db.useActiveUserListener();
      console.log("registred user logged in");
    }
  }, [Authenticated]);
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
                <Route index element={<DemoPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registration" element={<Registration />} />
                <Route path="/user">
                  <Route
                    index
                    element={
                      <AuthRequired>
                        <Dashboard />
                      </AuthRequired>
                    }
                  />
                  <Route
                    path="edit"
                    element={
                      <AuthRequired>
                        <EditUser />
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
                          <ActiveQuiz />
                        </AuthRequired>
                      }
                    />
                    <Route
                      path="result"
                      element={
                        <AuthRequired>
                          <Result />
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
