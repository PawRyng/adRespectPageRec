import React from "react";
import { useEffect, useState } from "react";

import LightBox from "./lightBox"

const Gallery = ({image}) =>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [clickedImg, setClickedImg] = useState(null);

    const goToSlide = index =>{
        document.querySelectorAll(".gallery__dots--dot")[currentIndex].classList.remove("gallery__dots--active")
        setCurrentIndex(index)
        document.querySelectorAll(".gallery__dots--dot")[index].classList.add("gallery__dots--active")
    }

    const onClickHandler = item => setClickedImg(item)




    return(
<div className="gallery container text-left">
    <p className="gallery__orangeText">Amet is samet</p>
        <h3 className="gallery__title">Gallery</h3>
        <div className="gallery__slider">
        <div class="gallery__galleryBox ratio ratio-4x3 ">
        <img src={image[currentIndex].download_url} alt="" onClick={() => onClickHandler(image[currentIndex].download_url)} />
        </div>
        <div class="gallery__galleryBox ratio ratio-4x3 ">
        <img src={image[currentIndex+1].download_url} alt="" onClick={() => onClickHandler(image[currentIndex+1].download_url)} />
        </div>
        </div>
        <div className="gallery__dots mx-auto">
            {image.map((img, slideIndex) => {
                
                return (
                    <div className={`gallery__dots--dot ${slideIndex === 0 ? "gallery__dots--active": ""}` } onClick={()=> goToSlide(slideIndex)} key={slideIndex}>•</div>
                )
            }
                )}
        </div>
            {clickedImg && (
                <LightBox
                clickedImg = {clickedImg}
                setClickedImg = {setClickedImg}
                />
            )}

</div>
    )

}
  
  export default Gallery;