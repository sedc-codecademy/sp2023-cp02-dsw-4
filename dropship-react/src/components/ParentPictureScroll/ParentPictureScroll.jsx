import React, { useState, useEffect } from "react"

import { leftArrow, rightArrow } from "./arrows"

const images = [
  { url: "/imgs/catScrollPictures/parent1.jpg.jpg", alt: "Car One" },
  { url: "/imgs/catScrollPictures/parent2.jpg.jpg", alt: "Car Two" },
  { url: "/imgs/catScrollPictures/parent3.jpg", alt: "Car Three" },
  { url: "/imgs/catScrollPictures/parent_4.jpg", alt: "Car Four" },
]

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(autoRotateImages, 5500)

    return () => {
      clearTimeout(timer)
    }
  }, [currentIndex])

  function nextImage() {
    setCurrentIndex((index) => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function prevImage() {
    setCurrentIndex((index) => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  const autoRotateImages = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="carousel-container">
      <div className="imageContainer">
        {images.map(({ url, alt }) => (
          <img key={url} src={url} alt={alt} style={{ '--translateVar': `${-100 * currentIndex}%` }} />
        ))}
      </div>
      <button className="carousel-button left" onClick={prevImage}>{leftArrow}</button>
      <button className="carousel-button right" onClick={nextImage}>{rightArrow}</button>
      <div className="dots-container">
        {images.map((_, index) => (
          <button
            key={index}
            className="dots"
            disabled={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
