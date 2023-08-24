import React from "react";
import "./CustomLink.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function CustomLink({ to, customNavigationLink, children }) {
  return (
    <NavLink
      to={to}
      className={`
      customLink
      opacity
      ${customNavigationLink}
    `}
    >
      {children}
    </NavLink>
  );
}

export default CustomLink;
