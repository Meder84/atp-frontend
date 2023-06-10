import React from "react";
import "./FooterCopyright.css";

function FooterCopyright() {
  return (
    <section className="footerCopyright">
      <main className="wrapper">
        <div className="footerCopyright__content">
          <p className="footerCopyright__text text">
            Политика в области обработки персональных данных
          </p>
          <p className="footerCopyright__text text">
            разработка сайта – ГУ АТП УПКР
          </p>
        </div>
      </main>
    </section>
  );
}

export default FooterCopyright;