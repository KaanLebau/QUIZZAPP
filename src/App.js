import "./app.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Head from "./components/head/Head";
import Welcome from "./pages/welcomePage/Welcome";
import LoginPage from "./pages/loginPage/LoginPage";
import Registration from "./pages/registration/Registration";
import UserModel from "./models/UserModel";
import GetQuizDataPage from "./pages/getQuiz/GetQuizDataPage";
import Dashboard from "./pages/dashboard/Dashboard";
import EditUser from "./pages/editUser/EditUser";
import ActiveQuiz from "./pages/activeQuiz/ActiveQuiz";

function App() {
  const registred = true;
  const model = new UserModel();
  return (
    <div className="app">
      <div className="content">
        <div className="left"></div>
        <div className="right">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Welcome />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registration" element={<Registration />} />
                <Route path="/user">
                  <Route index element={<Dashboard model={model} />} />
                  <Route path="edit" element={<EditUser />} />
                  <Route path="quiz">
                    <Route index element={<GetQuizDataPage model={model} />} />
                    <Route path="active" element={<ActiveQuiz />} />
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
