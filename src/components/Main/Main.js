import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
import { Route, useHistory } from "react-router-dom/cjs/react-router-dom.min";
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
import News from "../News/News";
import Management from "../Management/Management";
import Structure from "../Structure/Structure";
import * as auth from '../../utils/auth';
import { BAD_REQUEST, DEFAULT_ERROR } from '../../utils/consts';
// import cross from '../../images/cross.svg';
// import tick from '../../images/tick.svg';
import "./Main.css";
import Events from "../Events/Events";
import CompletedWork from "../СompletedWork/СompletedWork";
import Rewarding from "../Rewarding/Rewarding";

function Main({onCardClick}) {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    tokenCheck()
  }, [loggedIn]);

  function handleRegister(name, email, password, formReset) {
    let messageText = '';

    auth.register(name, email, password)
      .then(() => {
        formReset();
        auth.authorize(email, password)
          .then((data) => {
            if (!data) return;

            localStorage.setItem('jwt', data.token);
            formReset();
            history.push('/');
            setLoggedIn(true)
          })
          .catch(() => {
            setMessage(BAD_REQUEST);
          })
      })
      .catch((err) => {
        switch (err) {
          case 400:
            messageText = BAD_REQUEST;
            break;
          case 409:
            messageText = `Пользователь ${email} уже существует`;
            break;
          default:
            messageText = DEFAULT_ERROR;
        }
      })
      .finally(() => setMessage(messageText))
  }

  function handleLogin(email, password, formReset) {
    let messageText = '';

    auth.authorize(email, password)
      .then((data) => {
        if (!data) return;

        localStorage.setItem('jwt', data.token);
        formReset();
        history.push('/');
        setLoggedIn(true)
      })
      .catch((err) => {
        switch (err) {
          case 400:
            messageText = BAD_REQUEST;
            break;
          case 401:
            messageText = `Пользователь ${email} не авторизован!`;
            break;
          default:
            messageText = DEFAULT_ERROR;
        }
      })
      .finally(() => setMessage(messageText))
  }

  function tokenCheck() {
    if (!localStorage.getItem('jwt')) return;

    const jwt = localStorage.getItem('jwt');

    auth.getContent(jwt).then((res) => {
      if (!res) return;

      setCurrentUser({
        name: res.data.name,
        email: res.data.email,
      });
      setLoggedIn(true);
      history.push('/');
    })
      .catch(err => {
        console.log(err);
        setLoggedIn(false);
        localStorage.removeItem('jwt');
      });
  }

  function handleLogout() {
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    setCurrentUser({ name: '', email: '' });
    history.push('/');
  }

  function resetMessage() {
    setMessage('');
  }

  return (
    <section className="main">
      <Route path="/signup">
        <Register
          handleRegister={handleRegister}
          message={message}
          resetMessage={resetMessage}
        />
      </Route>
      <Route path='/signin'>
        <Login
          handleLogin={handleLogin}
          message={message}
          resetMessage={resetMessage}
          history={history} 
        />
      </Route>
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
        <Gallery 
          onCardClick={onCardClick}
        />
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
      <Route path='/news'>
        <Header headerCustom="app__header" />
        <News 
          onCardClick={onCardClick}
      />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path='/rewarding'>
        <Header headerCustom="app__header" />
        <Rewarding 
          onCardClick={onCardClick}
        />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path='/management'>
        <Header headerCustom="app__header" />
        <Management />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path='/structure'>
        <Header headerCustom="app__header" />
        <Structure />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path='/events'>
        <Header headerCustom="app__header" />
        <Events />
        <Footer />
        <FooterCopyright />
      </Route>
      <Route path='/completedWork'>
        <Header headerCustom="app__header" />
        <CompletedWork />
        <Footer />
        <FooterCopyright />
      </Route>
    </section>
  );
}

export default Main;
