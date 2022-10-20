import React from "react";
import { useEffect } from "react";
import Logo from "../img/Logo.svg"
import Glass from "../img/glass.svg"
import arrow from "../img/arrowMenue.svg"


const Head = ({photo})=>{
        
    return(
    <div className="container-fluid header">
        <div className="row">
            <div className="col-lg-6 col-md-12 header__contariner">
                <div className="row">
                    <h1>Headline <br/>
                        awesome</h1>
                </div>
                <div className="row">
                    <p>Billions upon billions bits of moving fluff invent the universe science rogue Rig Veda. Orion's sword rich in heavy atoms vanquish the network of wormholes.</p>
                </div>
                <div className="row buttons">
                    <div className="col-3 buttons__button">
                        <a className="buttons__text--white" href="">Button</a>
                    </div>
                    <div className="col-3 buttons__button buttons__button--active">
                        <a className="buttons__text--orange" href="">Learn more <img src={arrow} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-10 gallery p-0">
                <div className="gallery__item gallery__item--1" style={{backgroundImage: `url("${photo[0].download_url}")`}}></div>
                <div className="gallery__item gallery__item--2" style={{backgroundImage: `url("${photo[1].download_url}")`}}></div>
                <div className="gallery__item gallery__item--3" style={{backgroundImage: `url("${photo[2].download_url}")`}}></div>
                <div className="gallery__item gallery__item--4" style={{backgroundImage: `url("${photo[3].download_url}")`}}></div>
            </div>
        </div>
    </div>
    )

}
  
  export default Head;