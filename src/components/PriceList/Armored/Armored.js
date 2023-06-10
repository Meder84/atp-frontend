import React from "react";
import RegionsHeader from "../RegionsHeader/RegionsHeader";
import Li from '../Li/Li';
import './Armored.css';

function Armored() {

  return(
    <section className="armored">
      <main className="armored__wrapper wrapper">
        <RegionsHeader>
          <Li 
            title3='Bmw-760Li'
            li1='2 153.00'
            li2='21 870.00'
            li3='34 441.00'
            li4='30 308.00'
            li5='25 831.00'
            li6='60 874.00'
            li7='49 939.00'
            li8='80 505.00'
            li9='23 678.00'
            li10='24 109.00'
            li11='43.05'
            title4='Mercedes Bens-222'
            li12='2 624.00'
            li13='26 652.00'
            li14='41 971.00'
            li15='36 934.00'
            li16='31 478.00'
            li17='74 183.00'
            li18='60 857.00'
            li19='98 106.00'
            li20='28 855.00'
            li21='29 380.00'
            li22='52.46'
          />
        </RegionsHeader>
      </main>
    </section>
  )
}

export default Armored;