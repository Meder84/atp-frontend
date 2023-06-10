import React from "react";
import iconBus from "../../images/icons/iconBus.png";
import iconCar from "../../images/icons/iconCar.png";
import iconCarRepair from "../../images/icons/iconCarRepair.png";
import iconMinivan from "../../images/icons/iconMinivan.png";
import iconTruck from "../../images/icons/iconTruck.png";
import iconMiniBus from "../../images/icons/iconМinibus.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./Services.css";

function Services() {
  return (
    <section className="services">
      <main className="services__wrapper wrapper">
        <h2 className="services__title title general-title">Наши услуги</h2>
        <h4 className="services__subtitle subtitle">
          Наша компания предоставляет различные виды автотранспортных услуг
        </h4>
        <div className="services__list">
          <Link to="/price-list" className="services__item">
            <img src={iconBus} alt="" className="services__icon"></img>
            <div className="services__description">
              <h4 className="services__description-title">Аренда автобусов</h4>
              <p className="services__description-text">
                Автобус прекрасно подойдет для большой группы человек. К
                примеру, при поездке в горы.
              </p>
            </div>
          </Link>
          <Link to='/price-list' className="services__item">
            <img src={iconCar} alt="" className="services__icon"></img>
            <div className="services__description">
              <h4 className="services__description-title">
                Аренда легковых авто
              </h4>
              <p className="services__description-text">
                Вы можете выбрать подходящее авто под ваши различные цели.
              </p>
            </div>
          </Link>
          <Link to="/repair" className="services__item">
            <img src={iconCarRepair} alt="" className="services__icon"></img>
            <div className="services__description">
              <h4 className="services__description-title">
                Все виды ремонтных работ
              </h4>
              <p className="services__description-text">
                Ремонт - неотъемлемая часть владельца автомобиля. Наши
                высококвалифицированные мастера помогут решить такую проблему
                как поломка автомобиля.
              </p>
            </div>
          </Link>
          <Link to="/price-list" className="services__item">
            <img src={iconMinivan} alt="" className="services__icon"></img>
            <div className="services__description">
              <h4 className="services__description-title">Аренда минивэнов</h4>
              <p className="services__description-text">
                Минивэн очень хорошо подходит для большой семьи при дальних
                поездках.
              </p>
            </div>
          </Link>
          <Link to="/price-list" className="services__item">
            <img src={iconTruck} alt="" className="services__icon"></img>
            <div className="services__description">
              <h4 className="services__description-title">
                Аренда грузовых машин
              </h4>
              <p className="services__description-text">
                Если же вам нужно перевезти что-либо массивное, то наши грузовые
                автомобили помогут вам в этом.
              </p>
            </div>
          </Link>
          <Link to="/price-list" className="services__item">
            <img src={iconMiniBus} alt="" className="services__icon"></img>
            <div className="services__description">
              <h4 className="services__description-title">
                Аренда микроавтобусов
              </h4>
              <p className="services__description-text">
                Если вы хотите выехать небольшой группой людей куда-либо, то
                микроавтобусы - ваш выбор!
              </p>
            </div>
          </Link>
        </div>
      </main>
    </section>
  );
}

export default Services;
