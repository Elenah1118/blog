// src/Components/Header/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import useScrollDirection from '../../hooks/useScrollDirection'; // Importa el hook de scroll
import logo from '../../assets/images/Makeup.png';
import UserMenu from '../UserMenu/UserMenu';
import SearchBar from '../SearchBar/SearchBar'; // Importa el componente de búsqueda

const Header = ({ isLoggedIn }) => {
  const location = useLocation();
  const { isScrolled } = useScrollDirection(); // Usa el hook para detectar si hay scroll

  // Verifica si la ruta actual es la de la página logueada
  const isHomeLoggedInPage = location.pathname === '/home-logged-in';

  return (
    <header className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="header-content">
          <div className="search-bar-container">
            <SearchBar />
          </div>
        </div>
      <div className="logo">
          <Link to={isLoggedIn ? '/home-logged-in' : '/'}>
            <img src={logo} alt="Logo de tu blog" />
          </Link>
        </div>

        {isLoggedIn && isHomeLoggedInPage && (
          <div className="header-icons">
            <Link to="/wishlist" className="icon">
              <i className="fas fa-heart"></i>
            </Link>
            <Link to="/cart" className="icon">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <UserMenu /> {/* Mueve el UserMenu aquí para que esté al mismo nivel */}
          </div>
        )}

        {!isLoggedIn && (
          <div className="top-actions">
            <button className="login-button">Iniciar Sesión</button>
            <Link to="/register">
                <button className="subscribe-button">Subscribirse</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
