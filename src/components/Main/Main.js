import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import About from "../About/About";
import Counts from "../Counts/Counts";
import PriceList from "../PriceList/PriceList/PriceList";
import Armored from "../PriceList/Armored/Armored";
import Representative from "../PriceList/Representative/Representative";
import Passengers from "../PriceList/Passengers/Passengers";
import Minibuses from "../PriceList/MiniBuses/MiniBuses";
import Buses from "../PriceList/Buses/Buses";
import Tracks from "../PriceList/Tracks/Tracks";
import Repair from "../Repair/Repair/Repair";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Vacancies from "../Vacancies/Vacancies";
import FooterCopyright from "../FooterCopyright/FooterCoptright";
import Contacts from "../Сontacts/Contacts";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <Route path="/price-list">
        <Header headerCustom="app__header" />
        <PriceList />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/repair">
        <Header headerCustom="app__header" />
        <Repair />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/armored">
        <Header headerCustom="app__header" />
        <Armored />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/representative">
        <Header headerCustom="app__header" />
        <Representative />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/passengers">
        <Header headerCustom="app__header" />
        <Passengers />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/mini-buses">
        <Header headerCustom="app__header" />
        <Minibuses />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/buses">
        <Header headerCustom="app__header" />
        <Buses />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/tracks">
        <Header headerCustom="app__header" />
        <Tracks />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/gallery">
        <Header headerCustom="app__header" />
        <Gallery />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/about">
        <Header headerCustom="app__header" />
        <About />
        <Counts />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path='/vacancies'>
        <Header headerCustom="app__header" />
        <Vacancies />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path='/contacts'>
        <Header headerCustom="app__header" />
        <Contacts />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path="/signup">
        <Register
          // handleRegister={handleRegister}
          // message={message}
          // resetMessage={resetMessage}
        />
      </Route>
      <Route path='/signin'>
        <Login />
      </Route>
    </section>
  );
}

export default Main;
