// src/Components/Carousel/Carousel.js
import React from 'react';
import './Carousel.css'; // Estilos específicos del carrusel
import useCarousel from '../../hooks/useCarousel'; // Hook personalizado para manejar el carrusel
import CarouselItem from './CarouselItem';
// import carouselSlides from '../../data/carouselData';

const Carousel = ({ slides }) => {  // ✅ Ahora recibe los slides como prop
  // Obtiene las funciones y variables del hook personalizado para manejar el carrusel
  const {
    currentImageIndex, // Índice de la imagen actualmente visible
    progress, // Progreso del indicador actual (para animación)
    handleNextImage, // Función para avanzar a la siguiente imagen
    handlePreviousImage, // Función para retroceder a la imagen anterior
    setImageIndex, // Función para establecer una imagen específica
  } = useCarousel(slides);

  return (
    // Contenedor principal del carrusel
    <div className="carousel-wrapper">
      {/* Renderiza la diapositiva actual */}
      <CarouselItem {...slides[currentImageIndex]} />

      {/* Botón para retroceder a la imagen anterior */}
      <button className="carousel-button left" onClick={handlePreviousImage}>
        &#x2039; {/* Símbolo de flecha hacia la izquierda */}
      </button>

      {/* Botón para avanzar a la siguiente imagen */}
      <button className="carousel-button right" onClick={handleNextImage}>
        &#x203A; {/* Símbolo de flecha hacia la derecha */}
      </button>

      {/* Indicadores para las imágenes del carrusel */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <div
            key={index} // Llave única para React
            className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
            onClick={() => setImageIndex(index)} // Establece la imagen seleccionada al hacer clic en un indicador
          >
            {/* Indicador animado para la imagen activa */}
            {currentImageIndex === index && (
              <svg className="progress-ring" width="24" height="24">
                <circle
                  cx="7.5"
                  cy="7.5"
                  r="6.3"
                  fill="none"
                  stroke="#2a9e82"
                  strokeWidth="1.25"
                  strokeDasharray={1.5 * Math.PI * 9} // Longitud total del círculo
                  strokeDashoffset={1.5 * Math.PI * 9 * (1 - progress / 100)} // Progreso animado
                  transform="rotate(-90 7.5 7.5)" // Rotación para iniciar desde la parte superior
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
