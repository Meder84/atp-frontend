import React from "react";
import RegionsHeader from "../RegionsHeader/RegionsHeader";
import Li from "../Li/Li";
import './Tracks.css';

function Tracks() {
  return(
    <section className="tracks">
      <main className="wrapper">
        <RegionsHeader>
          <Li 
            title3='Газель'
            li1='530.00'
            li2='7 686.00'
            li3='x'
            li4='x'
            li5='x'
            li6='x'
            li7='x'
            li8='x'
            li9='x'
            li10='x'
            li11='15.13'
          />
        </RegionsHeader>
      </main>
    </section>
  )
}

export default Tracks;