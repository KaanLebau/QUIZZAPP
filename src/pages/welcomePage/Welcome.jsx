import { useNavigate } from "react-router-dom";
import "./welcome.scss";

function Welcome() {
  const navigate = useNavigate();
  function handleWelcome() {
    navigate("/login");
  }
  return (
    <div className="start" onClick={handleWelcome}>
      <p className="text">
        This project consists of building and deploying a webpage being an
        online quiz application. Users will be able to create their own profile
        using an alias, email and password to be able take different quizzes
        about different programming languages. Results from quizzes will saved
        to firebase and shown at a specific statistics page. Questions for each
        quiz are fetched from the API QuizAPI.
      </p>
    </div>
  );
}

export default Welcome;
