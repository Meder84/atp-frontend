import React from "react";
import RegionsHeader from "../RegionsHeader/RegionsHeader";
import Li from '../Li/Li';
import './MiniBuses.css';

function MiniBuses() {

  return(
    <section className="mini-buses">
      <main className="mini-buses__wrapper wrapper">
        <RegionsHeader>
          <Li 
            title3='Mercedes Bens 19мест'
            title31='Datum 13мест'
            li1='762.00'
            li2='7 742.00'
            li3='12 191.00'
            li4='10 728.00'
            li5='9 144.00'
            li6='21 548.00'
            li7='17 677.00'
            li8='28 497.00'
            li9='8 382.00'
            li10='8 534.00'
            li11='15.24'
            title4='Ford Transit 18мест'
            li12='760.00'
            li13='7 720.00'
            li14='12 158.00'
            li15='10 699.00'
            li16='9 118.00'
            li17='21 489.00'
            li18='17 629.00'
            li19='28 418.00'
            li20='8 359.00'
            li21='8 511.00'
            li22='15.20'
          />
        </RegionsHeader>
      </main>
    </section>
  )
}

export default MiniBuses;