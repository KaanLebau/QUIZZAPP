import { useEffect, useState } from "react";
import Head from "../../components/head/Head";
import ActiveQuizPresenter from "../../presenters/activeQuizPresenter/ActiveQuizPresenter";
import "./activeQuiz.scss";
import LoadPage from "../../presenters/loadPagePresenter/LoadPagePresenter";

function ActiveQuiz(props) {
  const [focus, setFocus] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(setLoading, 800, true);
  }, [props.quiz]);

  return (
    <div className="activeQuiz">
      <Head currentUser={focus} />
      <div className="content">
        {!loading ? (
          <LoadPage info={"Loading quiz"} />
        ) : (
          <ActiveQuizPresenter quiz={props.quiz} />
        )}
      </div>
    </div>
  );
}

export default ActiveQuiz;
