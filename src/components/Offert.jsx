import React, { useState } from 'react';
import Cards from "./cards"

const Offert = ()=>{
    const [option, setOption] = useState(false);
    const clickHandler = e=>{
            document.querySelectorAll(".switch__activer")[0].classList.toggle("switch__activer--active")
           document.querySelectorAll(".switch__container--element>p")[0].classList.toggle('p__active')
           document.querySelectorAll(".switch__container--element>p")[1].classList.toggle('p__active')
           setOption(!option);
    }

    return(
    <div className="px-3 pt-md-5 pb-md-4 mx-auto text-center Offert__container">
        <p className="Pricing">Pricing</p>
        <h2>Make it yours today</h2>
        <p className="UnderH2">All packages come with a 30 day money back gurantee!</p>
        <div className="switch">
            <div onClick={clickHandler} className="switch__container mx-auto text-center">
                <div className="switch__activer"></div>
                <div className="switch__container--element">
                    <p className="p__active">Mounthly</p>
                </div>
                <div className="switch__container--element">
                    <p>yearly</p>
                </div>
            </div>

        </div>
        <Cards year = {option}/>
    </div>
    )

}
  
  export default Offert;