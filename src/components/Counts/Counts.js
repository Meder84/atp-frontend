import React from "react";
import smile from "../../images/icons/iconSmile.png";
import iconOperator from "../../images/icons/iconOperator.png";
import iconEmployee from "../../images/icons/iconEmployee.png";
import iconCars from "../../images/icons/iconCars.png";
import Countup from "../Countup/Countup";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import CountUp from 'react-countup';
import "./Counts.css";

function Counts({customCounts}) {
  return (
    <section className={`counts ${customCounts}`}>
      <main className="counts__wrapper wrapper">
        <ul className="counts__list">
          <li className="counts__item">
            <img src={smile} alt="смайлик" className="counts__icon" />
            <Countup className="countUp" start={0} end={999} duration={3} />
            <p className="counts__text">Счастливые клиенты</p>
          </li>
          <li className="counts__item">
            <img src={iconCars} alt="Автомобили" className="counts__icon" />
            <Countup className="countUp" start={0} end={345} duration={3} />
            <p className="counts__text">Автомобили</p>
          </li>
          <li className="counts__item">
            <img
              src={iconOperator}
              alt="человек и компьюетре"
              className="counts__icon"
            />
            <Countup className="countUp" start={0} end={6} duration={3} />
            <p className="counts__text">Операторы</p>
          </li>
          <li className="counts__item">
            <img src={iconEmployee} alt="сотрудники" className="counts__icon" />
            <Countup className="countUp" start={0} end={214} duration={3} />
            <p className="counts__text">Сотрудники</p>
          </li>
        </ul>
      </main>
    </section>
  );
}

export default Counts;
