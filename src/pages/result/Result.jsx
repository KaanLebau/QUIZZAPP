import React, { useEffect } from "react";
import LoadPage from "../../presenters/loadPagePresenter/LoadPagePresenter";
import Head from "../../components/head/Head";
import ResultPresenter from "../../presenters/resultPresenter/ResultPresenter";
import { useState } from "react";

function Result() {
  const mockRes = {
    category: "SQL",
    difficulty: "Medium",
    correct: 12,
    wrong: 22,
    noAnswer: 5,
    passed: false
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(setLoading, 800, true);
  }, []);

  return (
    <div className="dashboard">
      <Head currentUser={true} />
      <div className="content">
        {!loading ? (
          <LoadPage info={"Calculating result"} />
        ) : (
          <ResultPresenter result={mockRes} />
        )}
      </div>
    </div>
  );
}

export default Result;
