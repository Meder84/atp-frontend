import React, { Children } from "react";
import './RegionsHeader.css';

function RegionsHeader({children}) {
  return(
      <main className="regionsHeader">
        <h2 className="title general-title">
          Прейскурант цен на транспортные автоуслуги
        </h2>
        <h4 className="regionsHeader__subtitle subtitle">
          Государственного Учреждения "Автотранспортное предприятие" при Управлении делами Президента Кыргызской Республики
        </h4>
          {children}
      </main>
  )
}

export default RegionsHeader;