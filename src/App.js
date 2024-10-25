import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false); // Controla si hemos hecho scroll hacia abajo
  const [isScrollingDown, setIsScrollingDown] = useState(false); // Controla si estamos desplazándonos hacia abajo
  const [lastScrollTop, setLastScrollTop] = useState(0); // Para comparar la posición actual con la anterior
  const timeoutRef = useRef(null); // Referencia para el temporizador
  const [activeSubcategories, setActiveSubcategories] = useState(null); // Controlar qué subcategoría está activa



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


  // Manejar hover con temporizador
  const handleMouseEnter = (category) => {
    clearTimeout(timeoutRef.current); // Cancelar cualquier temporizador previo
    setActiveSubcategories(category); // Establecer la subcategoría activa
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubcategories(null); // Restablecer subcategorías activas
    }, 400); // Retraso de 400ms
  };


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
        <nav className="navbar">
          <ul className="nav-links">
          <li className="nav-item">
          <a href="#new">New</a>
            </li>
            <li 
              className="nav-item"
              onMouseEnter={(e) => handleMouseEnter(e, 'bestsellers')}
              onMouseLeave={handleMouseLeave}
              >
              <a href="#bestsellers">Best Sellers</a>
              {/* Subcategorías */}
              <div className={`subcategories ${activeSubcategories === 'bestsellers' ? 'active' : ''}`}>
                <ul>
                  <li><a href="#lipstick">Lipstick</a></li>
                  <li><a href="#lipgloss">Lip Gloss</a></li>
                  <li><a href="#liquidlipstick">Liquid Lipstick</a></li>
                  <li><a href="#lipline">Lip Liner</a></li>
                  <li><a href="#lipprimer">Lip Primer</a></li>
                </ul>
              </div>
            </li>
            <li
              className="nav-item"
              onMouseEnter={(e) => handleMouseEnter(e, 'face')}
              onMouseLeave={handleMouseLeave}
              >
              <a href="#maquillaje">Face</a>
              {/* Subcategorías */}
              <div className={`subcategories ${activeSubcategories === 'face' ? 'active' : ''}`}>
                <ul>
                  <li><a href="#foundation">Foundation</a></li>
                  <li><a href="#primer">Primer</a></li>
                  <li><a href="#powder">Powder</a></li>
                  <li><a href="#concealer">Concealer</a></li>
                  <li><a href="#blusher">Blusher</a></li>
                  <li><a href="#bronzer">Bronzer</a></li>
                  <li><a href="#contour">Contour</a></li>
                  <li><a href="#setting-spray">Setting Spray</a></li>
                </ul>
              </div>
            </li>
            <li
              className="nav-item"
              onMouseEnter={(e) => handleMouseEnter(e, 'lips')}
              onMouseLeave={handleMouseLeave}
              >              
              <a href="#lips">Lips</a>
              {/* Subcategorías */}
              <div className={`subcategories ${activeSubcategories === 'lips' ? 'active' : ''}`}>
                <ul>
                  <li><a href="#lipstick">Lipstick</a></li>
                  <li><a href="#lipgloss">Lip Gloss</a></li>
                  <li><a href="#liquidlipstick">Liquid Lipstick</a></li>
                  <li><a href="#lipline">Lip Liner</a></li>
                  <li><a href="#lipprimer">Lip Primer</a></li>
                </ul>
              </div>
            </li>
            <li
              className="nav-item"
              onMouseEnter={(e) => handleMouseEnter(e, 'eyes')}
              onMouseLeave={handleMouseLeave}
              >              
              <a href="#eyes">Eyes</a>
              {/* Subcategorías */}
              <div className={`subcategories ${activeSubcategories === 'eyes' ? 'active' : ''}`}>
                <ul>
                  <li><a href="#eyeliner">Eyeliner</a></li>
                  <li><a href="#mascara">Mascara</a></li>
                  <li><a href="#eyeshadow">Eyeshadow</a></li>
                  <li><a href="#brows">Brows</a></li>
                  <li><a href="#lashes">Lashes</a></li>
                </ul>
              </div>
            </li>
            <li
              className="nav-item"
              onMouseEnter={(e) => handleMouseEnter(e, 'brushes')}
              onMouseLeave={handleMouseLeave}
              >              
              <a href="#brushes">Brushes</a>
              {/* Subcategorías */}
              <div className={`subcategories ${activeSubcategories === 'brushes' ? 'active' : ''}`}>
                <ul>
                  <li><a href="#eyebrushes">Eye Brushes</a></li>
                  <li><a href="#facebrushes">Face Brushes</a></li>
                  <li><a href="#lipbrushes">Lip Brushes</a></li>
                  <li><a href="#brushcleanser">Brush Cleanser</a></li>
                  <li><a href="#beautyblenders">Beauty Blenders</a></li>
                </ul>
              </div>
            </li>
            <li
              className="nav-item"
              onMouseEnter={(e) => handleMouseEnter(e, 'tools')}
              onMouseLeave={handleMouseLeave}
              >              
              <a href="#tools">Tools</a>
              {/* Subcategorías */}
              <div className={`subcategories ${activeSubcategories === 'tools' ? 'active' : ''}`}>
                <ul>
                  <li><a href="#applicators">Applicators</a></li>
                  <li><a href="#makeupbags">Makeup Bags</a></li>
                  <li><a href="#accessories">Accessories</a></li>
                  <li><a href="#containers">Containers</a></li>
                  <li><a href="#lashes">Lashes</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
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