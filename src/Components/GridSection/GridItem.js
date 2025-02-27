// src/Components/GridSection/GridItem.js
import React from "react";
import { Link } from "react-router-dom";
import "./GridItem.css"; // Nuevo archivo para los estilos de cada elemento

const GridItem = ({ image, title, description, link }) => {
  return (
    <div className="grid-item" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div> {/* 🔹 Capa oscura para mejorar visibilidad */}
      <div className="grid-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="learn-more">
          Más información →
        </Link>
      </div>
    </div>
  );
};

export default GridItem;
