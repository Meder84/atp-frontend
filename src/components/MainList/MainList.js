import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Hero from "../Hero/Hero";
import ShowCase from "../ShowCase/ShowCase";
import About from "../About/About";
import Counts from "../Counts/Counts";
import Services from "../Services/Services";
import Card from "../Cards/Cards";
import Carousel from "../Carousel/Carousel";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import FooterCopyright from "../FooterCopyright/FooterCoptright";
import "./MainList.css";

function MainList({ loggedIn }) {
  return (
    <main className="main-list">
      <Header />
      <Hero />
      <ShowCase />
      <About />
      <Counts />
      <Services />
      <Carousel />
      <Team />
      <Footer />
      <FooterCopyright />
      {/* <Promo
        loggedIn={loggedIn}
      />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer /> */}
    </main>
  );
}

export default MainList;
