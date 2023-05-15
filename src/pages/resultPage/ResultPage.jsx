import React, { useEffect } from "react";
import LoadPagePresenter from "../../presenters/loadPagePresenter/LoadPagePresenter";
import HeadPresenter from "../../presenters/headPresenter/HeadPresenter";

import ResultPresenter from "../../presenters/resultPresenter/ResultPresenter";
import { useState } from "react";

function ResultPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(setLoading, 800, true);
  }, []);

  return (
    <div className="dashboard">
      <HeadPresenter />
      <div className="content">
        {!loading ? (
          <LoadPagePresenter info={"Calculating result"} />
        ) : (
          <ResultPresenter />
        )}
      </div>
    </div>
  );
}

export default ResultPage;
