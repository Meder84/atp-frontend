import React from "react";
import './Li.css';

function Li(props) {

  return(
    <ul className="li__list">
      <li className="li__item">
        <h2 className="li__title">Направление</h2>
        <ul className="li__list2">
          <li>г. Бишкек и Чуйская обл.</li>
          <li>г. Чолпон-Ата</li>
          <li>г. Каракол</li>
          <li>г. Нарын</li>
          <li>г. Талас</li>
          <li>г. Ош</li>
          <li>г. Джалал-Абад</li>
          <li>г. Баткен</li>
          <li>г. Алма-Ата</li>
          <li>Санаторий Аврора</li>
          <li>Расчет за 1км*</li>
        </ul>
      </li>
      <li className="li__item">
        <h2 className="li__title">Расстояние до пункта назначения</h2>
        <ul className="li__list2">
          <li>~</li>
          <li>508</li>
          <li>800</li>
          <li>704</li>
          <li>600</li>
          <li>1 414</li>
          <li>1 160</li>
          <li>1 870</li>
          <li>550</li>
          <li>560</li>
          <li>1</li>
        </ul>

      </li>
      <li className="li__item">
        <h2 className="li__title">{props.title3}<br />{props.title31}</h2>
        <ul className="li__list2">
          <li>{props.li1}</li>
          <li>{props.li2}</li>
          <li>{props.li3}</li>
          <li>{props.li4}</li>
          <li>{props.li5}</li>
          <li>{props.li6}</li>
          <li>{props.li7}</li>
          <li>{props.li8}</li>
          <li>{props.li9}</li>
          <li>{props.li10}</li>
          <li>{props.li11}</li>
        </ul>        
      </li>
      <li className="li__item">
        <h2 className="li__title">{props.title4}</h2>
        <ul className="li__list2">
          <li>{props.li12}</li>
          <li>{props.li13}</li>
          <li>{props.li14}</li>
          <li>{props.li15}</li>
          <li>{props.li16}</li>
          <li>{props.li17}</li>
          <li>{props.li18}</li>
          <li>{props.li19}</li>
          <li>{props.li20}</li>
          <li>{props.li21}</li>
          <li>{props.li22}</li>
        </ul>        
      </li>
      <li className="li__item">
        <h2 className="li__title">{props.title5}</h2>
        <ul className="li__list2">
          <li>{props.li23}</li>
          <li>{props.li24}</li>
          <li>{props.li25}</li>
          <li>{props.li26}</li>
          <li>{props.li27}</li>
          <li>{props.li28}</li>
          <li>{props.li29}</li>
          <li>{props.li30}</li>
          <li>{props.li31}</li>
          <li>{props.li32}</li>
          <li>{props.li33}</li>
        </ul>        
      </li>
    </ul>
  )
}

export default Li;