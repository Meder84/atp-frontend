import React from 'react';
import { NavLink } from 'react-router-dom';
import Account from '../Account/Account';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';

import './PopupMenu.css';

function PopupMenu(props) {

  return (
    <div
      className="popup-menu"
      onClick={props.handleOverlay}
    >
      <div className="popup-menu__wrapper">

        <Header
          headerCustom="popup-menu__header"
          customHeaderNavTab="popup-menu__navtab"
        />
        <div className="popup-menu__container">
          <div className="popup-menu__navtab-container">
            <NavTab />
            <button
              className="popup-menu__btn-close"
              onClick={props.onClick}
            >
              x
            </button>
          </div>
          <div className="popup-menu__links" >
            <Navigation
              customNavigation="popup-menu__navigation"
              customNavigationLinks="popup-menu__navigation-links"
              customNavLink="popup-menu__navigation-link"
            />
          </div>
          <NavLink to="/profile"
            activeClassName="popup-menu__link-active"
            className="popup-menu__link-profile opacity"
          >
            {/* <Account /> */}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PopupMenu;
