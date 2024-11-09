// src/Components/Header/Header.js
import React from 'react';
import './Header.css';
import useScrollDirection from '../../hooks/useScrollDirection';
import useSearchFilter from '../../hooks/useSearchFilter'; // Importa el hook
import logo from '../../assets/images/Makeup.png';
import SearchBar from '../SearchBar/SearchBar'; // Importa el componente SearchBar

const Header = () => {
  const { isScrolled } = useScrollDirection();
  const { searchTerm, setSearchTerm, selectedBrand, setSelectedBrand } = useSearchFilter(); // Usa el hook

  return (
    <header className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Barra de búsqueda a la izquierda */}
        <div className="search-bar-container">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
        </div>

        {/* Logo en el centro */}
        <div className="logo">
          <img src={logo} alt="Logo de tu blog" />
        </div>

        {/* Botones de acciones a la derecha */}
        <div className="top-actions">
          <button className="login-button">Iniciar Sesión</button>
          <button className="subscribe-button">Suscribirse</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
