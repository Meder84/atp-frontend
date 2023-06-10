import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import Gallery from "../Gallery/Gallery";
import MainList from "../MainList/MainList";
import { Route, useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import "./App.css";

function App() {

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
      />
      <Route exact path="/">
        <MainList />
      </Route>
    </div>
  );
}

export default App;
