import React, { useState, useEffect } from "react";
import IconHamburger from "../IconHamburger/IconHamburger";
import PopupMenu from "../PopupMenu/PopupMenu";
import Account from "../Account/Account";
import { NavLink } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Navigation.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navigation({ customNavigation, customNavigationLinks, customNavLink }) {
  const [showPopupMenu, setshowPopupMenu] = useState(false);

  // useEffect(() => {
  //   const closeByEscape = (e) => {
  //     if (e.key === "Escape") {
  //       setshowPopupMenu(false);
  //     }
  //   };

  //   document.addEventListener("keydown", closeByEscape);
  //   return () => document.removeEventListener("keydown", closeByEscape);
  // }, [showPopupMenu]);

  // const handleOverlay = (e) => {
  //   if (e.target === e.currentTarget) {
  //     setshowPopupMenu(false);
  //   }
  // };

  // function handleClick() {
  //   setshowPopupMenu(true);
  // }

  // function handleClose() {
  //   setshowPopupMenu(false);
  // }

  return (
    <nav className={`navigation ${customNavigation}`}>
      <ul className={`navigation__links ${customNavigationLinks}`}>
        <li className="navigation__link">
          <CustomLink
            to="/"
            customNavigationLink={`navigation__content ${customNavLink}`}
          >
            <p className="text">Главная</p>
          </CustomLink>
        </li>
        <li className="navigation__link navigation__link__about-popup__hide">
          <CustomLink
            to="/about"
            customNavigationLink={`navigation__content ${customNavLink}`}
          >
            <p className="text">О нас</p>
          </CustomLink>
          <div className="navigation__link__about-popup">
            <Link to="/management" className="navigation__link__about-popup__link">
              Руководство
            </Link>
            <Link to="/structure" className="navigation__link__about-popup__link">
              Структура
            </Link>
            <Link to="/contacts" className="navigation__link__about-popup__link">
              Контакты
            </Link>
            <Link to="/about" className="navigation__link__about-popup__link">
              О нас
            </Link>
            <Link to="/vacancies" className="navigation__link__about-popup__link">
              Вакансии
            </Link>
          </div>
        </li>
        <li className="navigation__link">
          <CustomLink
            to="/price-list"
            customNavigationLink={`navigation__content ${customNavLink}`}
          >
            <p className="text">Аренда</p>
          </CustomLink>
        </li>
        <li className="navigation__link">
          <CustomLink
            to="/repair"
            customNavigationLink={`navigation__content ${customNavLink}`}
          >
            <p className="text">Ремонт</p>
          </CustomLink>
        </li>
        <li className="navigation__link">
          <CustomLink
            to="/gallery"
            customNavigationLink={`navigation__content ${customNavLink}`}
          >
            <p className="text">Галерея</p>
          </CustomLink>
        </li>
        <li className="navigation__link">
          <CustomLink
            to="/events"
            customNavigationLink={`navigation__content ${customNavLink}`}
          >
            <p className="text">События</p>
          </CustomLink>
        </li>
      </ul>
      {/* <NavLink to='/profile'
        activeClassName="menu__link-active"
        className='navigation__account-container'>
        <Account
          customSubtitleAccount={customSubtitleAccount}
        />
      </NavLink> */}
      {/* <IconHamburger
        customIconHamburger="navigation__icon-hamburger"
        onClick={handleClick}
      />
      {showPopupMenu && (
        <PopupMenu handleClose={handleClose} handleOverlay={handleOverlay} />
      )} */}
    </nav>
  );
}

export default Navigation;
