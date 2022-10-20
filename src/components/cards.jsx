import React, { useState } from "react";
const Cards = ({year})=>{
const cost = {
    Starter:320,
    Normal:450,
    Premium:650
}
const [countStarter, setCountStarter] = useState(cost.Starter)
const [countNormal, setCountNormal] = useState(cost.Normal)
const [countPremium, setCountPremium] = useState(cost.Premium)
if(year){
    setTimeout(() => {
        if(countStarter < (cost.Starter*12)){
            setCountStarter(countStarter+10)
        }
        if(countNormal < (cost.Normal*12)){
            setCountNormal(countNormal+10)
        }
        if(countPremium < (cost.Premium*12)){
            setCountPremium(countPremium+10)
        }
      }, 1); 

}
else{
    setTimeout(() => {
        if(countStarter > (cost.Starter)){
            setCountStarter(countStarter-10)
        }
        if(countNormal > (cost.Normal)){
            setCountNormal(countNormal-10)
        }
        if(countPremium > (cost.Premium)){
            setCountPremium(countPremium-10)
        }
      }, 1); 

}

const ulist = () =>{
return(
    <>
        <ul>
            <li>Single domain</li>
        </ul>
        <ul>
            <li>Single domain</li>
        </ul>
        <ul>
            <li>Single domain</li>
        </ul>
        <ul>
            <li>Single domain</li>
        </ul>
        <ul>
            <li>Single domain</li>
        </ul>
        <ul>
            <li>Single domain</li>
        </ul>
        <ul>
            <li>Single domain</li>
        </ul>
    </>
)
}





    return(
<div className="cards">
        <div className="card">
            <p className="card__title">Starter</p>
            <h4 className="card__cost">{year ? countStarter : countStarter} PLN</h4>
            <p className="card__mounth"><small>{year ? "rocznie" : "miesięcznie" }</small></p>
            <div className="Offert__container--flex">
            {ulist()}

            </div>
            <button type="button" class="btn card__button btn-primary">Subscribe</button>
        </div>
        <div className="card card--dark">
            <p className="card__title">Normal</p>
            <h4 className="card__cost">{year ? countNormal : countNormal} PLN</h4>
            <p className="card__mounth"><small>{year ? "rocznie" : "miesięcznie" }</small></p>
            <div className="Offert__container--flex">
            {ulist()}

            </div>
            <button type="button" class="btn card__button btn-primary">Subscribe</button>
        </div>
        <div className="card">
            <p className="card__title">Premium</p>
            <h4 className="card__cost">{year ? countPremium : countPremium} PLN</h4>
            <p className="card__mounth"><small>{year ? "rocznie" : "miesięcznie" }</small></p>
            <div className="Offert__container--flex">
            {ulist()}

            </div>
            <button type="button" class="btn card__button btn-primary">Subscribe</button>
        </div>
        <p className="cards__underText container-fluid text-center py-5">Prices above do not include VAT</p>

</div>
    )

}
  
  export default Cards;