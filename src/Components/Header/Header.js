import React from 'react';
import './Header.css';
import useScrollDirection from '../../hooks/useScrollDirection';
import logo from '../../assets/images/Makeup.png';


const Header = () => {
  const { isScrolled } = useScrollDirection();

  return (
      /* Cabecera superior con logo y botones */
      <header className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
      <img src={logo} alt="Logo de tu blog" />
      </div>
      <div className="top-actions">
        <button className="login-button">Iniciar Sesión</button>
        <button className="subscribe-button">Suscribirse</button>
      </div>
    </header>
  );
};

export default Header;