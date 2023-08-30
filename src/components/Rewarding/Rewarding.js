import React from "react";
import { rewarding } from "../../images/arrImages/arrImages";
import LinkToMain from "../LinkToMain/LinkToMain";
import Card from "../Card/Card";
import './Rewarding.css'

function Rewarding({ onCardClick }) {
  return (
    <section className="rewarding">
      <main className="rewarding__wrapper wrapper">
        <div className="container-link">
          <LinkToMain text="События" />
        </div>
        <div className="rewarding__description">
          <h2 className="rewarding__title title general-title">
            Государственное учреждение "Автотранспортное предприятие" при Управлении делами Президента
            Кыргызской Республики, поздравило своих сотрудников с Днем независимости Кыргызстана.
          </h2>
          <p className="rewarding__text text">
            Сегодня, 30 августа, в Государственное учреждение "Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики
            состоялось торжественное мероприятие, В честь празднования 32-летия Независимости Кыргызстана. <br />
            С Днем независимости Кыргызской Республики сотрудников Государственное учреждение "Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики
            поздравили: Директор Апсаматов Жениш Гапарович, Заместитель директора Альчинов Эрлан Токтомбекович, Главный инженер Сариев Раушан Айтикулович.
          </p>
          <ul className="rewarding__list">
            {
              rewarding.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  onCardClick={onCardClick}
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

export default Rewarding;
