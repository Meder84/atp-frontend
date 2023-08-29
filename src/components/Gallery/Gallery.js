import React, {useState, useEffect} from 'react';
import LinkToMain from '../LinkToMain/LinkToMain';
import { garageImages } from '../../images/arrImages/arrImages';
import Card from '../Card/Card';
import './Gallery.css';

function Gallery({ onCardClick, card }) {

  // function handleClick() {
  //   onCardClick(card);
  // } 

  return(
    <section className="gallery">
      <main className='gallery__wrapper wrapper'>
        <div className="container-link">
          <LinkToMain text="Галерея" />
        </div>
        <h2 className="gallery__title general-title title">Галерея</h2>
        <h4 className="gallery__subtitle subtitle">В нашем арсенале имеется большое количество различных машин: < br/> от легковых до грузовых</h4>
        <ul className="gallery__list">
          {
            garageImages.map((card) => (
              <Card 
                key = {card.id}
                card = {card}
                onCardClick = {onCardClick}
              >
                <h3>{card.name}</h3>
              </Card>
            ))
          }
        </ul>
      </main>
    </section>
  )
}

export default Gallery;