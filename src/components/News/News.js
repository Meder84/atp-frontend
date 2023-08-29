import React from "react";
import { subbotnikImages } from "../../images/arrImages/arrImages";
import LinkToMain from "../LinkToMain/LinkToMain";
import Card from "../Card/Card";
import './News.css'

function News({ onCardClick }) {
  return (
    <section className="news">
      <main className="news__wrapper wrapper">
        <div className="container-link">
          <LinkToMain text="События" />
        </div>
        <div className="news__description">
          <h2 className="news__title title general-title">Государственное учреждение
            "Автотранспортное предприятие"
            при Управлении делами Президента Кыргызской Республики на общереспубликанском субботнике</h2>
          <p className="news__text text">10 июня 2023г. в Кыргызстане прошел общереспубликанский субботник.
            В нем активно участвовали сотрудники Государственного учреждения
            "Автотранспортное предприятие"
            при Управлении делами Президента Кыргызской Республики.
            Были убраны и приведены в порядок прилегающие территории и выделенные участки улиц и тротуаров.
            Наряду с этим было произведена уборка мусора.</p>
          <ul className="news__list">
          {
            subbotnikImages.map((card) => (
              <Card 
                key = {card.id}
                card = {card}
                onCardClick = {onCardClick}
              >
              </Card>
            ))
          }
          </ul>
        </div>
      </main>
    </section>
  )
}

export default News;
