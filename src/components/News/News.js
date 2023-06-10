import React from "react";
import ItemGallery from "../ItemGallery/ItemGallery";
import LinkToMain from "../LinkToMain/LinkToMain";
import imag1 from '../../images/subbotnikAtp/1.jpg'
import imag2 from '../../images/subbotnikAtp/2.jpg'
import imag3 from '../../images/subbotnikAtp/3.jpg'
import imag4 from '../../images/subbotnikAtp/4.jpg'
import imag5 from '../../images/subbotnikAtp/5.jpg'
import imag6 from '../../images/subbotnikAtp/6.jpg'
import imag7 from '../../images/subbotnikAtp/7.jpg'
import imag8 from '../../images/subbotnikAtp/8.jpg'
import imag9 from '../../images/subbotnikAtp/9.jpg'
import imag10 from '../../images/subbotnikAtp/10.jpg'
import imag11 from '../../images/subbotnikAtp/11.jpg'
import imag12 from '../../images/subbotnikAtp/12.jpg'
import imag13 from '../../images/subbotnikAtp/13.jpg'
import imag14 from '../../images/subbotnikAtp/14.jpg'
import './News.css'

function News() {

  return (
    <section className="news">
      <main className="news__wrapper wrapper">
        <div className="container-link">
          <LinkToMain text="Новости" />
        </div>
        <div className="news__description">
          <h2 className="news__title title general-title">Государственное учреждение
            "Автотранспортное предприятие"
            при Управлении делами Президента Кыргызской Республики на общереспубликанском субботнике</h2>
          <p className="news__text text">10 июня 2023г. в Кыргызстане прошел общереспубликанский субботник.
            В нем активно участвовали сотрудники Государственного учреждения
            "Автотранспортное предприятие"
            при Управлении делами Президента Кыргызской Республики.
            Были убраны и приведены в порядок прилегающие территории и выделенные участки улиц и тротуаров.
            Наряду с этим было произведена уборка мусора.</p>
          <ul className="news__list">
            <ItemGallery
              image={imag11}
              alt='субботник'
            />
            <ItemGallery
              image={imag12}
              alt='субботник'
            />
            <ItemGallery
              image={imag1}
              alt='субботник'
            />
            <ItemGallery
              image={imag2}
              alt='субботник'
            />
            <ItemGallery
              image={imag3}
              alt='субботник'
            />
            <ItemGallery
              image={imag4}
              alt='субботник'
            />
            <ItemGallery
              image={imag5}
              alt='субботник'
            />
            <ItemGallery
              image={imag6}
              alt='субботник'
            />
            <ItemGallery
              image={imag7}
              alt='субботник'
            />
            <ItemGallery
              image={imag8}
              alt='субботник'
            />
            <ItemGallery
              image={imag9}
              alt='субботник'
            />
            <ItemGallery
              image={imag10}
              alt='субботник'
            />
            <ItemGallery
              image={imag13}
              alt='субботник'
            />
            <ItemGallery
              image={imag14}
              alt='субботник'
            />
          </ul>
        </div>
      </main>
    </section>
  )
}

export default News;
