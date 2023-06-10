import React from "react";
import RegionsHeader from "../RegionsHeader/RegionsHeader";
import Li from "../Li/Li";
import './Representative.css';

function Representative() {
  return(
    <section className="representative">
      <main className="wrapper">
        <RegionsHeader>
          <Li 
            title3='Caddilac xts 28t '
            title31='Ford Mondeo'
            li1='775.00'
            li2='7 874.00'
            li3='12 400.00'
            li4='10 912.00'
            li5='9 300.00'
            li6='21 917.00'
            li7='17 984.00'
            li8='28 984.00'
            li9='8 525.00'
            li10='8 680.00'
            li11='15.50'
          />
        </RegionsHeader>
      </main>
    </section>
  )
}

export default Representative;