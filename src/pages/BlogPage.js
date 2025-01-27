// src/pages/BlogPage.js
import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ChatIcon from '../Components/ChatIcon/ChatIcon';
import './BlogPage.css'; // Asegúrate de tener este archivo con los estilos adecuados
import blogImage from '../assets/images/BlogUp.jpg'; // Importa la imagen

const sections = [
  {
    title: 'Marcas',
    items: [
      { id: 1, name: 'Nyx', image: blogImage, creationDate: '06 nov 2024' },
      { id: 2, name: 'Mac', image: blogImage, creationDate: '30 jun 2024' },
      { id: 3, name: 'Channel', image: blogImage, creationDate: '28 jun 2024' },
    ],
  },
  {
    title: 'Novedades',
    items: [
      { id: 4, name: 'Nueva colección', image: blogImage, creationDate: '05 nov 2024' },
      { id: 5, name: 'Productos exclusivos', image: blogImage, creationDate: '01 nov 2024' },
      { id: 6, name: 'Lanzamiento especial', image: blogImage, creationDate: '22 oct 2024' },
    ],
  },
  {
    title: 'Guías y Consejos',
    items: [
      { id: 7, name: 'Tips de maquillaje', image: blogImage, creationDate: '10 oct 2024' },
      { id: 8, name: 'Cómo aplicar base', image: blogImage, creationDate: '15 oct 2024' },
      { id: 9, name: 'Técnicas avanzadas', image: blogImage, creationDate: '25 sep 2024' },
    ],
  },
  {
    title: 'Productos',
    items: [
      { id: 10, name: 'Base de maquillaje', image: blogImage, creationDate: '12 sep 2024' },
      { id: 11, name: 'Paleta de sombras', image: blogImage, creationDate: '20 sep 2024' },
      { id: 12, name: 'Labial mate', image: blogImage, creationDate: '18 sep 2024' },
    ],
  },
];

const BlogPage = () => {
  return (
    <div className="BlogPage">
      <Header />
      <Navbar />
      <div className="blog-main-content">
        {sections.map((section, index) => (
          <div key={index} className="section-container">
            <h2 className="section-title">{section.title}</h2>
            <div className="items-container">
              {section.items.map((item) => (
                <div key={item.id} className="item-card">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-date">{item.creationDate}</p>
                  <a href="#ver-mas" className="ver-mas-link">Ver más</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ChatIcon />
      <Footer />
    </div>
  );
};

export default BlogPage;
