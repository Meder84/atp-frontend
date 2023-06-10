import React from 'react';
import './FooterForm.css';

function FooterForm (props) {
  return (
    <div className={`footer-form ${props.customFooterForm}`}>
      <button
        className={`
          footer-form__button
          opacity
          ${props.customFooterFormButton}
        `}
        type='submit'
        disabled={props.disabled}
      >
        {props.buttonText}
      </button>
      <div
        className={`
          footer-form__text-container
          ${props.customFooterFormTextContainer}
        `}
      >
        {props.children}
      </div>
    </div>
  )
}

export default FooterForm;
