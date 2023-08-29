import React from "react";
import './ImagePopup.css';


function ImagePopup({ card, close, handleOverlay }) {
  return (
    <div 
      className={`popup popup_type_place ${card.url ? 'popup_opened' : ''}`}
      onClick={handleOverlay}
    >
      <figure className="popup__container-place">
        <button 
          className="popup__close-button popup__close-button_place opacity" 
          type="button"
          onClick={close}
        >
        </button>
        <img 
          className="popup__image"  
          src={card ? card.url : '#'} 
          alt={card ? card.name : ''}
        />
        <figcaption 
          className="popup__caption">
          {card ? card.name : ''}
        </figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;