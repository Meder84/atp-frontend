import React from "react";
import RegionsHeader from "../RegionsHeader/RegionsHeader";
import Li from "../Li/Li";
import './Passengers.css';

function Passengers() {
  return(
    <section className="passengers">
      <main className="wrapper">
        <RegionsHeader>
          <Li 
            title3='Toyota Corolla'
            title31='Ford Focus'
            li1='884.00'
            li2='7 478.00'
            li3='11 776.00'
            li4='10 363.00'
            li5='8 832.00'
            li6='20 813.00'
            li7='17 074.00'
            li8='27 525.00'
            li9='8 096.00'
            li10='8 243.00'
            li11='14.72'
          />
        </RegionsHeader>
      </main>
    </section>
  )
}

export default Passengers;