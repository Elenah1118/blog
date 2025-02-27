// src/Components/Header/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import useScrollDirection from '../../hooks/useScrollDirection'; // Importa el hook de scroll
import logo from '../../assets/images/LogoInnovaEnergía.svg';
import UserMenu from '../UserMenu/UserMenu';
//import SearchBar from '../SearchBar/SearchBar'; // Importa el componente de búsqueda
import MobileMenu from "../MobileMenu/MobileMenu"; // Importamos el menú móvil

const Header = ({ isLoggedIn }) => {
  const location = useLocation();
  const { isScrolled } = useScrollDirection(); // Usa el hook para detectar si hay scroll
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Estado para detectar pantallas móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para abrir/cerrar el menú

  // 📌 Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Si la pantalla es menor a 768px, activa el modo móvil
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

/************************************************************************************************ */


useEffect(() => {
  const header = document.querySelector(".top-bar");
  if (header) {
    // 🔹 Establecemos valores específicos en lugar de depender de offsetHeight
    const headerHeight = isScrolled ? "60px" : "90px"; 
    console.log("Nueva altura establecida del top-bar:", headerHeight); // Debugging
    document.documentElement.style.setProperty("--header-height", headerHeight);
  }
}, [isScrolled]);



  /************************************************************************************************ */

  // 📌 Función para alternar el menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      console.log("Estado previo del menú:", prev);
      return !prev;
    });
  };

  // 📌 Verifica si la ruta actual es la de la página logueada
  const isHomeLoggedInPage = location.pathname === '/home-logged-in';

  return (
    <header className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
  
        {/* ✅ Contenedor del Logo */}
        <div className="logo">
          <Link to={isLoggedIn ? '/home-logged-in' : '/'}>
            <img src={logo} alt="Logo de tu blog" />
          </Link>
        </div>
  
        {/* ✅ Contenedor del botón de menú (Separado del logo) */}
        {isMobile && (
          <div className="menu-button-container">
            <button className="menu-button" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        )}
  
        {/* ✅ Íconos de usuario (Solo en escritorio) */}
        {!isMobile && isLoggedIn && isHomeLoggedInPage && (
          <div className="header-icons">
            <Link to="/wishlist" className="icon">
              <i className="fas fa-heart"></i>
            </Link>
            <Link to="/cart" className="icon">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <UserMenu />
          </div>
        )}
  
        {/* 📌 Menú Móvil */}
        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
  
      </div>
    </header>
  );
  
};

export default Header;
