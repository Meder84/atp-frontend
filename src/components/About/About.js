import React from "react";
import imageAbout from "../../images/about.jpg";
import doubleCheck from "../../images/double-check.jpg";
import presentation from "../../presentation/presentation.pdf";
import "./About.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function About() {
  // let pathToFile = {presentation};
  // function DownloadFile(file) {
  //   location.href = pathToFile + file;
  // }

  return (
    <section className="about">
      <div className="wrapper">
        <main className="about__grid">
          <div className="about__image-container">
            <img
              src={imageAbout}
              alt="человек в офисе"
              className="about__image imageScale"
            ></img>
          </div>
          <div className="about__description">
            <h3 className="about__title">О нас</h3>
            <p className="about__text">
              Государственное учреждение "Автотранспортное предприятие" при
              Управлении делами Президента Кыргызской Республики <br />
              Автотранспортное обеспечение:
            </p>
            <ul className="about__list">
              <li className="about__item">
                <img
                  src={doubleCheck}
                  alt="галочка"
                  className="about__double-check"
                />
                Президента Кыргызской Республики
              </li>
              <li className="about__item">
                <img
                  src={doubleCheck}
                  alt="галочка"
                  className="about__double-check"
                />
                Председателя Кабинета Министров
              </li>
              <li className="about__item">
                <img
                  src={doubleCheck}
                  alt="галочка"
                  className="about__double-check"
                />
                Заместителей кабинета министров
              </li>
              <li className="about__item">
                <img
                  src={doubleCheck}
                  alt="галочка"
                  className="about__double-check"
                />
                Администрация Президента КР
              </li>
              <li className="about__item">
                <img
                  src={doubleCheck}
                  alt="галочка"
                  className="about__double-check"
                />
                Управления Делами Президента
              </li>
              <li className="about__item">
                <img
                  src={doubleCheck}
                  alt="галочка"
                  className="about__double-check"
                />
                Министерств и ведомств КР
              </li>
              <li className="about__item">
                <img
                  src={doubleCheck}
                  alt="галочка"
                  className="about__double-check"
                />
                Клинической больницы УДПКР
              </li>
            </ul>
            <div className="about__download-container opacity">
              <a
                href={presentation}
                download={presentation}
                className="about__download"
              >
                Скачать презентацию
              </a>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default About;
