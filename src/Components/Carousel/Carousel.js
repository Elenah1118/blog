// src/Components/Carousel/Carousel.js 
import React from 'react'; 
import './Carousel.css'; 
import useCarousel from '../../hooks/useCarousel'; 
const Carousel = ({ images }) => { 
  const { currentImageIndex, progress, handleNextImage, handlePreviousImage, setImageIndex } = useCarousel(images); 
  return ( 
    <div className="carousel-container"> 
        <section id="contenido"> 
      <div className="carousel-slide"> 
        <a href="#link1" target="_blank" rel="noopener noreferrer"> 
          <img src={images[currentImageIndex]} alt="Imagen de Carrusel" /> 
        </a> 
      </div> 
      <button className="carousel-button left" onClick={handlePreviousImage}>&#x2039;</button> 
      <button className="carousel-button right" onClick={handleNextImage}>&#x203A;</button> 
      <div className="carousel-indicators"> 
        {images.map((_, index) => ( 
          <div 
            key={index} 
            className={`indicator ${currentImageIndex === index ? 'active' : ''}`} 
            onClick={() => setImageIndex(index)} 
          > 
            {currentImageIndex === index && ( 
              <svg className="progress-ring" width="24" height="24"> 
                <circle 
                  cx="7.5" cy="7.5" r="6.3" fill="none" 
                  stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.25" 
                  strokeDasharray={1.5 * Math.PI * 9} 
                  strokeDashoffset={1.5 * Math.PI * 9 * (1 - progress / 100)} 
                  transform="rotate(-90 7.5 7.5)" 
                /> 
              </svg> 
            )} 
          </div> 
        ))} 
      </div> 
      </section> 

    </div>  
  ); 
}; 
export default Carousel; 