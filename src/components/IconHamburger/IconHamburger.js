import React from "react";
import iconHamburger from '../../images/icons/iconHamburger.svg';
import './IconHamburger.css';

function IconHamburger(props) {
  return (
    <div 
      className={`icon-hamburger opacity ${props.customIconHamburger}`}
      onClick={props.onClick}
    >
      <div className="icon-hamburger__item"></div>
      <div className="icon-hamburger__item"></div>
      <div className="icon-hamburger__item"></div>
    </div>
    // <img
    //  className={`iconHamburger opacity ${props.customIconHamburger}`}
    //  src={iconHamburger}
    //  alt='Иконка гамбургер меню'
    //  onClick={props.onClick}
    // />
  )
}

export default IconHamburger;
