import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./PriceListItems.css";

function PriceListItem({to, title, marka1, marka2, marka3, CustomLink}) {
  return (
    <Link to={to} className="price-list-item">
    <div className="price-list-item__description">
      <h3 className="price-list-item__subTitle">{title}</h3>
      <p className="price-list-item__text">
        {marka1} <br />
        {marka2} <br />
        {marka3}
      </p>
    </div>
    <div className={`price-list-item__child ${CustomLink}`}></div></Link>
  );
}

export default PriceListItem;