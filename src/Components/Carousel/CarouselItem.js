// src/Components/Carousel/CarouselItem.js
import React from 'react';

const CarouselItem = ({ background, products, texts, uploadButton }) => {
  return (
    <div className="carousel-item" style={{ backgroundImage: `url(${background})` }}>
      
      {/* Contenedor de textos con posición personalizada */}
      <div className="carousel-texts">
        {texts.map((textItem, index) => (
          <p 
            key={index} 
            className={`carousel-text ${textItem.type}`} // Agregamos la clase basada en el tipo
            style={{
              position: 'absolute',
              left: textItem.positionX, 
              top: textItem.positionY,
              fontSize: textItem.fontSize || 'normal', // Se establece el peso del texto
              transform: 'translate(-50%, -50%)',
            }}
          >
            {textItem.text}
          </p>
        ))}
      </div>

      {/* Contenedor de imágenes con posición personalizada */}
      <div className="carousel-products">
        {products.map((product, index) => (
          <img 
            key={index} 
            src={product.src} 
            alt={`Producto ${index + 1}`} 
            className="carousel-product"
            style={{
              position: 'absolute',
              left: product.positionX, 
              top: product.positionY,
              width: product.width,  // 📌 Aplicamos ancho dinámico
              height: product.height, // 📌 Aplicamos alto dinámico
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Botón de subir archivo solo en la última diapositiva */}
      {uploadButton && (
        <button 
          className="upload-button"
          style={{
            position: 'absolute',
            left: uploadButton.positionX, 
            top: uploadButton.positionY,
            transformOrigin: 'center', // 📌 Evita que el botón se desplace al hacer hover
          }}
          onClick={() => document.getElementById('fileUpload').click()}
        >
          Revisa tus gastos 
        </button>
      )}
      <input type="file" id="fileUpload" style={{ display: 'none' }} />
    </div>
  );
};

export default CarouselItem;
