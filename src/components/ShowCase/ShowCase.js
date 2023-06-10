import React from "react";
import './ShowCase.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ShowCase() {

  return(
    <section className="showCase">
      <main className="showCase__wrapper wrapper">
        <h2 className="showCase__title title general-title">Чем мы занимаемся?</h2>
        <div className="showCase__items">
          <Link to="/price-list" className="showCase__item">
            <div className="showCase__description">
              <h3 className="showCase__subTitle">Аренда авто</h3>
              <p className="showCase__text">Предоставление разного вида и класса авто для аренды</p>
            </div>
            <div className="showCase__child showCase__lease"></div>
          </Link>
          <Link to="/" className="showCase__item ">
            <div className="showCase__description ">
              <h3 className="showCase__subTitle">Ремонт авто</h3>
              <p className="showCase__text">Ремонт и обслуживание различного вида и класса авто (от лекговых до грузовых)</p>
            </div>
            <div className="showCase__child showCase__repair"></div>
          </Link>
          <Link to="/" className="showCase__item ">
            <div  className="showCase__description">
              <h3 className="showCase__subTitle">Транспортное обеспечение</h3>
              <p className="showCase__text">Обеспечение транспортом различных структур Кыргызской Республики</p>
            </div>
            <div className="showCase__child showCase__transport-support"></div>
          </Link>
        </div>
      </main>
    </section>
  )
}

export default ShowCase;
