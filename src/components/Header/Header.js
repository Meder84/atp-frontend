import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";
import IconHamburger from "../IconHamburger/IconHamburger";
import "./Header.css";
import PopupMenu from "../PopupMenu/PopupMenu";

function Header(props) {
  const [scroll, setScroll] = useState(0);
  const [showPopupMenu, setShowPopupMenu] = useState(false);
  const [showIconHamburger, setShowIconHamburger] = useState(true);
  const [showCloseBtn, setShowCloseBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        setShowPopupMenu(false);
      }
    }

    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [showPopupMenu])

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setShowPopupMenu(false);
    }
  }

  function handleClick() {
    // setShowCloseBtn(true);
    // setShowIconHamburger(false);
    setShowPopupMenu(true);
  };

  function handleClose() {
    setShowPopupMenu(false);
    // setShowIconHamburger(true);
    // setShowCloseBtn(false);
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // function handleHideHumburger() {
  //   setShowIconHamburger(false)
  //   setShowCloseBtn(true)
  // }

  // function handleBtnClose(){
  //   setShowIconHamburger(true)
  //   setShowCloseBtn(false)
  // }
  //  const handleUpButton = () => {
  //   window.scrollTo(0, 0);
  // };


  return (
    <header className={scroll > 75 ? "header__background" : `header ${props.headerCustom}`}>
      <Link to="/" className="logo header__logo opacity"></Link>
      <Navigation
        customNavigation='header__navigation'
      />

      <nav className={`header__links ${props.headerCustomLinks}`}>
        <NavTab
          customNavTab={`header__navtab ${props.customHeaderNavTab}`}
        />
        {/* {props.children} */}
        <a className="header__lang opacity">KG</a>
        {/* {
          showCloseBtn &&
          <button
            className="header__close-button"
            onClick={handleClose}
          >
            x
          </button>
        } */}
        {
          showPopupMenu
          && <PopupMenu
            onClick={handleClose}
            handleOverlay={handleOverlay}
          />
        }
        {
          showIconHamburger &&
          <IconHamburger
            customIconHamburger='header__icon-hamburger'
            onClick={handleClick}
          />
        }
      </nav>
      {/* <button className="test" onClick={handleClose}></button> */}
    </header>
  );
}

export default Header;
