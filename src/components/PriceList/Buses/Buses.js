import React from "react";
import RegionsHeader from "../RegionsHeader/RegionsHeader";
import Li from '../Li/Li';
import './Buses.css';

function Buses() {

  return(
    <section className="buses">
      <main className="buses__wrapper wrapper">
        <RegionsHeader>
          <Li 
            title3='Кавз'
            li1='558.00'
            li2='9 445.00'
            li3='14 873.00'
            li4='13 088.00'
            li5='11 155.00'
            li6='26 288.00'
            li7='21 566.00'
            li8='34 765.00'
            li9='10 225.00'
            li10='10 411.00'
            li11='18,59'
            title4='Golden Dragon'
            li12='549.00'
            li13='9 282.00'
            li14='14 617.00'
            li15='12 863.00'
            li16='10 963.00'
            li17='25 835.00'
            li18='21 194.00'
            li19='34 166.00'
            li20='10 049.00'
            li21='10 232,00'
            li22='18,27'
            title5='Foton 39мест'
            li23='550.00'
            li24='9 301.00'
            li25='14 648.00'
            li26='12 890.00'
            li27='10 986.00'
            li28='25 889.00'
            li29='21 239.00'
            li30='34 238.00'
            li31='10 070.00'
            li32='10 254,00'
            li33='18,31'
          />
        </RegionsHeader>
      </main>
    </section>
  )
}

export default Buses;