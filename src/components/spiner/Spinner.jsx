import React from "react";
import "./spinner.scss";

function Spinner(props) {
  return (
    <div className="pageCover">
      <div className="spinner">{props.children}</div>
    </div>
  );
}

export default Spinner;
