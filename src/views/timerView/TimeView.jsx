import React, { useEffect, useState } from "react";
import "./time.scss";

function Time(props) {
  const [tentMin, setTenthMin] = useState(0);
  const [min, setMin] = useState(0);
  const [tentSec, setTenthSec] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    if (props.start) {
      setTimeout(() => {
        if (sec < 9) {
          setSec(sec + 1);
        } else if (tentSec < 5) {
          setSec(0);
          setTenthSec(tentSec + 1);
        } else if (min < 9) {
          setSec(0);
          setTenthSec(0);
          setMin(min + 1);
        } else {
          setSec(0);
          setTenthSec(0);
          setMin();
          setTenthMin(tentMin + 1);
        }
      }, 1000);
    }
  }, [sec, props.start]);
  return (
    <div className="timer">
      <h2>{tentMin}</h2>
      <h2>{min}</h2>
      <h2>:</h2>
      <h2>{tentSec}</h2>
      <h2>{sec}</h2>
    </div>
  );
}

export default Time;
