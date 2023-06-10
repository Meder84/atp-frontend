import React from "react";
import './ItemGallery.css';

function ItemGallery({image, alt, title}) {

  return(
    <li className="itemGallery">
      <img src={image} alt={alt} className="itemGallery__image imageScale opacity"/>
      <h3 className="itemGallery__title">{title}</h3>
    </li>
  )
 }

export default ItemGallery;