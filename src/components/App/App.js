import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import MainList from "../MainList/MainList";
import { Route, useLocation, Switch, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ImagePopup from "../ImagePopup/ImagePopup";
import "./App.css";

export const initState = {
  password: '',
  email: '',
  message: '',
  imgTooltip: '',
  loggedIn: false,
}

function App() {

  const [selectedCard, setselectedCard] = useState({ name: '', url: '' });

  function handleCardClick(card) {
    setselectedCard(card)
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        setselectedCard(false);
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [selectedCard]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setselectedCard(false);
    }
  };
  
  function closeAllPopup() {
    setselectedCard({ name: '', url: '' });
  }

  const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scroll({ top: 0 });
    }, [location])
  }
  useScrollToTop();

  return (
    <div className="app">
      <Main
        onCardClick={handleCardClick}
      />
      <Route exact path="/">
        <MainList />
      </Route>
      <ImagePopup
        card={selectedCard}
        close={closeAllPopup}
        handleOverlay={handleOverlay}
      />
    </div>
  );
}

export default App;
