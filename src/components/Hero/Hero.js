import React from "react";
import './Hero.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Hero () {
  return(
    <section className="hero">
      <main className="hero__container">
        <div className="hero__description">
          <h1 className="hero__title">Государственное учреждение</h1>
          <h2 className="hero__subtitle">
            "Автотранспортное предприятие"
          </h2>
          <h2 className="hero__subtitle">
            при Управлении делами Президента Кыргызской Республики
          </h2>
          <div className="hero__links-container">
            <Link to='/about' className='hero__link opacity'>
              Подробнее {'>>>'}
            </Link>
            {/* <Link to='/about' className='hero__link opacity'>
              Подробнее {'>>>'}
            </Link> */}
          </div>
        </div>
      </main>
    </section>
  )
}

export default Hero
