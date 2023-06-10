import React, { useState } from "react";
// import test from '../../images/garage/bmw.jpg'
// import { cards } from "../../utils/consts";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
// const cards = 'https://api.nomoreparties.co/beatfilm-movies';
const cards = [
  {
    id: 1,
    title: 'Автобусы',
    url: '../../images/garage/bmw.jpg'
  }
]

function Card() {
  return (
    <section>
      <ul>
        {
          cards.map(car => (
            <li key={car.id}>
              <img src={require(`${car.url}.jpg`)} alt={car.title} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}




export default Card;
