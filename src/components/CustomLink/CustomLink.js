import React from "react";
import "./CustomLink.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function CustomLink({ to, customNavigationLink, text }) {
  return (
    <NavLink
      to={to}
      className={`
      customLink
      opacity
      ${customNavigationLink}
    `}
    >
      {text}
    </NavLink>
  );
}

export default CustomLink;
