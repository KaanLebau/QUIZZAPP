import React from "react";
import LoadpageView from "../../views/loadpageView/LoadpageView";
import { ImSpinner10 } from "react-icons/im";

function LoadPagePresenter(props) {
  return (
    <LoadpageView>
      <p className="loadingInfo">{props.info}</p>
      <ImSpinner10 className="rotate" />
    </LoadpageView>
  );
}

export default LoadPagePresenter;
