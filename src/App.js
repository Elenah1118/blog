import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false); // Controla si hemos hecho scroll hacia abajo
  const [isScrollingDown, setIsScrollingDown] = useState(false); // Controla si estamos desplazándonos hacia abajo
  const [lastScrollTop, setLastScrollTop] = useState(0); // Para comparar la posición actual con la anterior

  // Detectar el desplazamiento del usuario
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Si el usuario se desplaza hacia abajo
        setIsScrollingDown(true);
      } else {
        // Si el usuario se desplaza hacia arriba
        setIsScrollingDown(false);
      }

      // Si el usuario ha desplazado la página más de 100px, indicamos que ha hecho scroll
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        // Cuando el usuario llega a la parte superior, restauramos el tamaño inicial del top-bar
        setIsScrolled(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="App">
      {/* Cabecera superior con logo y botones */}
      <header className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src="logo.png" alt="Logo de tu blog" />
        </div>
        <div className="top-actions">
          <button className="login-button">Iniciar Sesión</button>
          <button className="subscribe-button">Suscribirse</button>
        </div>
      </header>

      {/* Barra de navegación */}
      <div className={`navbar-wrapper ${isScrollingDown ? 'scroll-up' : 'scroll-down'} ${isScrolled ? 'scrolled-navbar' : ''}`}>
      <div className="line top-line"></div> {/* Línea superior */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#inicio">New</a></li>
            <li><a href="#makeup">Best sellers</a></li>
            <li><a href="#makeup">Face</a></li>
            <li><a href="#makeup">Eyes</a></li>
            <li><a href="#makeup">Lips</a></li>
            <li><a href="#makeup">Lips</a></li>
            

          </ul>
        </nav>
        <div className="line bottom-line"></div> {/* Línea inferior */}
      </div>

      {/* Contenido principal */}
      <section id="contenido">
        <h1>Bienvenida a tu blog de maquillaje</h1>
        <p>Este es el contenido inicial de tu blog. Continuaremos añadiendo más elementos y diseño.</p>
      </section>

      {/* Sección de posts ficticios */}
      <section id="posts">
        {[...Array(10)].map((_, index) => (
          <div className="post" key={index}>
            <h2>Post {index + 1}</h2>
            <p>Este es el contenido del post {index + 1}.</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;