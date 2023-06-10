import React from "react";
import LinkToMain from "../LinkToMain/LinkToMain";
import "./Contacts.css";

function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__wrapper wrapper">
        <div className="container-link">
          <LinkToMain text="Контакты" />
        </div>
        <div className="conacts__description">
          <h2 className="conacts__description__title title">
            Контактная информация
          </h2>
          <h3 className="conacts__description__subtitle">
            Для корреспонденции:
          </h3>
          <p className="conacts__description__text">
            720001, Бишкек, улица Михаила Фрунзе, д. 421,
          </p>
        </div>
        <ul className="conacts__list">
          <li className="conacts__list__item">
            <h3 className="contacts__list__title">ДИСПЕТЧЕР АТП:</h3>
            <p className="contacts__list__text">+996 555-92-32-18</p>
          </li>
          <li className="conacts__list__item">
            <h3 className="contacts__list__title">ОТДЕЛ КАДРОВ:</h3>
            <p className="contacts__list__text">+996 312-43-47-01</p>
          </li>
          <li className="conacts__list__item">
            <h3 className="contacts__list__title">ДЛЯ СОИСКАТЕЛЕЙ:</h3>
            <p className="contacts__list__text">+996 312-05-75-75</p>
          </li>
        </ul>
        <div className="conacts__corruption__container">
          <p className="contacts__corruption__text text">
            Если Вы считаете, что Вам стали известны факты коррупции, а также если
            у Вас имеются конкретные предложения, направленные на
            совершенствование работы по противодействию коррупции, Вы можете
            сообщить об этом.
          </p>
          <p className="contacts__corruption__text text">директору "Автомобильного предриятия" При Управлении делами президента Кыргызской Республики {<br />} +996 312-43-48-48</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
