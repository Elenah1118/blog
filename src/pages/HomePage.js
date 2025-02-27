// src/pages/HomePage.js

import React from 'react';
import LayoutMainPage from '../Components/Layout/LayoutMainPage';
import Carousel from '../Components/Carousel/Carousel';
import carouselSlides from '../data/carouselData'; // ✅ Importa los datos aquí
import './HomePage.css';
import GridSection from "../Components/GridSection/GridSection";




const HomePage = ({ images }) => {
  return (
    <LayoutMainPage>
      {/* Sección del Carrusel */}
      <section className="home-carousel">
      <Carousel slides={carouselSlides} />  {/* ✅ Pasa los slides correctamente */}
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="home-about">
        <h1>Sobre Nosotros</h1>
        <p>Conoce más sobre nuestra misión y valores.</p>
      </section>


      {/* Sección Sobre Nosotros */}
      <section className="grid-section">

      <GridSection />

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
