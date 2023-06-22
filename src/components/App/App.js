import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import MainList from "../MainList/MainList";
import { Route, useLocation, Switch, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

export const initState = {
  password: '',
  email: '',
  message: '',
  imgTooltip: '',
  loggedIn: false,
}

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
