import React, { useState } from "react";
// import test from '../../images/garage/bmw.jpg'
// import { cards } from "../../utils/consts";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
// const cards = 'https://api.nomoreparties.co/beatfilm-movies';
// import garageImages from '../../images/arrImages/arrImages.js/garageImages'
import { garageImages } from "../../images/arrImages/arrImages.js";
import LinkToMain from "../LinkToMain/LinkToMain.js";
import Card from "../Card/Card.js";

function Cards({ onEditAvatar, onEditProfile, onAddPlace,
  onCardClick, cards, onCardLike, onCardDelete }) {
  return (
    
    <section className="gallery">
      <main className='gallery__wrapper wrapper'>
        <div className="container-link">
          <LinkToMain text="Галерея" />
        </div>
        <h2 className="gallery__title general-title title">Галерея</h2>
        <h4 className="gallery__subtitle subtitle">В нашем арсенале имеется большое количество различных машин: < br /> от легковых до грузовых</h4>
        <ul className="gallery__list">
          {
            garageImages.map((card) => (
              <Card
                key={card.id}
                card={card}
                onCardClick={onCardClick}
              />
            ))
          }
        </ul>
      </main>
    </section>
  )
}




export default Cards;
