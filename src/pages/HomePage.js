// src/pages/HomePage.js

import React from 'react';
import LayoutMainPage from '../Components/Layout/LayoutMainPage';
import Carousel from '../Components/Carousel/Carousel';

const HomePage = ({ images }) => {
  return (
    <LayoutMainPage>
      {/* Sección del Carrusel */}
      <section className="home-carousel">
        <Carousel images={images} />
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="home-about">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre nuestra misión y valores.</p>
      </section>

      {/* Sección de Productos Destacados (opcional) */}
      <section className="home-featured">
        <h2>Productos Destacados</h2>
        <p>Explora nuestros productos más populares.</p>
      </section>
    </LayoutMainPage>
  );
};

export default HomePage;
