import React from "react";
import './ItemGallery.css';

function ItemGallery({ image, alt, title, onclick }) {

  return (
    <li className="itemGallery">
      <img
        src={image}
        alt={alt}
        className="itemGallery__image imageScale opacity"
        onClick={onclick}
      />
      <h3 className="itemGallery__title">{title}</h3>
    </li>
  )
}

export default ItemGallery;