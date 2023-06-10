import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./LinkToMain.css";

function LinkToMain({LinkToMain, LinkToMainSpan, LinkToMainText, text}) {
  return (
    <div className={`link-to-main ${LinkToMain}`}>
      <Link to="/" className="link-to-main__link text opacity">
        Главная
      </Link>
      <span className={`link-to-main__span ${LinkToMainSpan}`}>/</span>
      <p className={`text ${LinkToMainText}`}>{text}</p>
    </div>
  );
}

export default LinkToMain;