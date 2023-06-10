import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PriceListItem from "../PriceListItems/PriceListItems";
import rent from "../../../presentation/rent.pdf";
import "./PriceList.css";
import LinkToMain from "../../LinkToMain/LinkToMain";

function PriceList() {
  const armored = "Бронированные";
  const mercedesBens = "Mercedes Bens-222";
  const bmw760 = "Bmw-760lI";

  const representative = "Представительские";
  const caddilac = "Caddilac XTS 28T";
  const fordMondeo = "Ford Mondeo";

  const passengers = "Легковые";
  const toyotaCorolla = "Toyota Corolla";
  const fordFocus = "Ford Focus";

  const miniBuses = "Микроавтобусы";
  const mercedesBensMiniBus = "Mercedes Bens 19 местный";
  const datum = "Datum 13 местный";
  const fordTransit = "Ford Transit 18 местный";

  const buses = "Автобусы";
  const cavs = "Кавз 35 местный";
  const goldenDragon = "Golden Dragon 35 местный";
  const foton = "Foton 39 местный";

  const tracks = "Грузовые";
  const gazel = "Газель";

  return (
    <section className="price-list">
      <main className="price-list__wrapper wrapper">
        <div className="container-link">
          <LinkToMain text="Аренда" />
        </div>
        <h2 className="price-list__title title general-title">
          Прейскурант цен на транспортные автоуслуги
        </h2>
        <h4 className="price-list__subtitle subtitle">
          Государственного Учреждения "Автотранспортное предприятие" при
          Управлении делами Президента Кыргызской Республики
        </h4>
        <div className="price-list__items">
          <PriceListItem
            to="/armored"
            title={armored}
            marka1={mercedesBens}
            marka2={bmw760}
            CustomLink="price-list__armored"
          />
          <PriceListItem
            to="/representative"
            title={representative}
            marka1={caddilac}
            marka2={fordMondeo}
            CustomLink="price-list__representative"
          />
          <PriceListItem
            to="/passengers"
            title={passengers}
            marka1={toyotaCorolla}
            marka2={fordFocus}
            CustomLink="price-list__passengers"
          />
          <PriceListItem
            to="/mini-buses"
            title={miniBuses}
            marka1={mercedesBensMiniBus}
            marka2={datum}
            marka3={fordTransit}
            CustomLink="price-list__miniBuses"
          />
          <PriceListItem
            to="/buses"
            title={buses}
            marka1={cavs}
            marka2={goldenDragon}
            marka3={foton}
            CustomLink="price-list__buses"
          />
          <PriceListItem
            to="/tracks"
            title={tracks}
            marka1={gazel}
            CustomLink="price-list__tracks"
          />
        </div>
        <div className="price-list__download-container opacity">
          <a href={rent} download={rent} className="price-list__download">
            Скачать прейскурант
          </a>
        </div>
      </main>
    </section>
  );
}

export default PriceList;
