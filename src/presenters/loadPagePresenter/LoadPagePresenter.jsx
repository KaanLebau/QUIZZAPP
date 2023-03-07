import React from "react";
import Spinner from "../../views/loadpageView/LoadpageView";
import { ImSpinner10 } from "react-icons/im";

function LoadPage(props) {
  return (
    <Spinner>
      <p className="loadingInfo">{props.info}</p>
      <ImSpinner10 className="rotate" />
    </Spinner>
  );
}

export default LoadPage;
