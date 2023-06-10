import React from "react";
import './Ul.css';

function Ul(props) {
  return(
    <ul className="ul text">
      <li>{props.li1}</li>
      <li>{props.li2}</li>
      <li>{props.li3}</li>
      <li>{props.li4}</li>
      <li>{props.li5}</li>
    </ul>
  )
}

export default Ul;