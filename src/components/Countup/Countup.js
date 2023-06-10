import React from "react";
import CountUp from "react-countup";
import './Countup.css';

function Countup({className, start, end, duration}) {

  return(
    <span className={className}>
      <CountUp
        start={start}
        end={end}
        duration={duration}
      />
    </span>
  )
}

export default Countup;
