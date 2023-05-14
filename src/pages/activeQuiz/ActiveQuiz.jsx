import { useEffect, useState } from "react";
import ActiveQuizPresenter from "../../presenters/activeQuizPresenter/ActiveQuizPresenter";
import "./activeQuiz.scss";
import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";
import HeadPresenter from "../../presenters/headPresenter/HeadPresenter";

function ActiveQuiz(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(setLoading, 200, true);
  }, [props.quiz]);

  return (
    <div className="activeQuiz">
      <HeadPresenter />
      <div className="content">
        {!loading ? (
          <LoadPagePresenter info={"Loading quiz"} />
        ) : (
          <ActiveQuizPresenter quiz={props.quiz} />
        )}
      </div>
    </div>
  );
}

export default ActiveQuiz;
