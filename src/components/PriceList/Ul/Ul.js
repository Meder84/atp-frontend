import React from "react";
import "./Ul.css";

function Ul({text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11,}) {
  return (
    <div className="ul">
      <h2 className="ul__title title">{title}</h2>
      <ul className="ul__list">
        <li>{text1}</li>
        <li>{text2}</li>
        <li>{text3}</li>
        <li>{text4}</li>
        <li>{text5}</li>
        <li>{text6}</li>
        <li>{text7}</li>
        <li>{text8}</li>
        <li>{text9}</li>
        <li>{text10}</li>
        <li>{text11}</li>
      </ul>
    </div>
  );
}

export default Ul;
