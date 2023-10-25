import React, { useState, useEffect } from "react";

import { leftArrow, rightArrow } from "./arrows";

const images = [
  "/imgs/catScrollPictures/parent1.jpg.jpg",
  "/imgs/catScrollPictures/parent2.jpg.jpg",
  "/imgs/catScrollPictures/parent3.jpg",
  "/imgs/catScrollPictures/parent_4.jpg",
  
];

function ParentPictureScroll() {

  const [currentIndex, setCurrentIndex] = useState(3);

  useEffect(() => {
    const timer = setTimeout(autoRotateImages, 4000);

    return () => {
      clearTimeout(timer); 
    };
  }, [currentIndex]); 

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const autoRotateImages = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={prevImage} className="carousel-button">{leftArrow}</button>
      
      
      <img
        src={images[currentIndex]}
        alt={` ${currentIndex + 1}`} // samo teks dava ne moze slika
        className="carousel-image"
      />
      

      <button onClick={nextImage} className="carousel-button" id="rigtArrow">{rightArrow} </button>

      <div className="dot-container">
      <ol className="dots">
          {images.map((_image, index) => (
            <li
              key={index}
              className={`${index === currentIndex && 'active'}`}
              onClick={() => setCurrentIndex(index)}
            ></li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ParentPictureScroll;
