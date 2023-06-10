import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "../Navigation/Navigation";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <main className="wrapper">
        <nav className="footer__header">
          <Link
            to="/"
            className="logo header__logo opacity"
            target="_blank"
          ></Link>
          <Navigation />
          <div className="footer__header-contacts">
            <h4>+996 (312) 43-48-48</h4>
            <a href="http://atp.gov.kg/" target="_blank">
              atp.gov.kg
            </a>
          </div>
        </nav>
        <div className="footer__content">
          <div className="footer__description">
            <p className="text">
              Государственное учреждение "Автотранспортное предприятие" при
              Управлении делами Президента Кыргызской Республики
            </p>
            <p className="text">
              &copy; все права защищены {new Date().getFullYear()}
            </p>
          </div>
          <div className="footer__location">
            <p className="text">
              Бишкек, <br /> улица Михаила Фрунзе, д. 421,
            </p>
            <div className="footer__social-links">
              <a className="footer__social-link" target="_blank" href="https://www.instagram.com/gos.garaj/">
                <div className="footer__social-icon facebook"></div>
              </a>
              <a className="footer__social-link" target="_blank" href="https://www.instagram.com/gos.garaj/">
                <div className="footer__social-icon instagram"></div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </footer>
  );
}

export default Footer;
