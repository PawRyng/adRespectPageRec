import React from "react";
import { useEffect, useState } from "react";
const LightBox = ({clickedImg, setClickedImg}) =>{
    

    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
          setClickedImg(null);
        }
      };



    return(
        <>
      <div className="gallery__lightBox dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
      </div>
    </>
    )

}
  
  export default LightBox;