import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useScrollDirection from './hooks/useScrollDirection';  //Codigo optimizado -NO BORRAR-
import useHoverWithDelay from './hooks/useHoverWithDelay';  //Codigo optimizado -NO BORRAR-
import useCarousel from './hooks/useCarousel';  //Codigo optimizado -NO BORRAR-





function App() {

  const { isScrollingDown, isScrolled } = useScrollDirection(); //Codigo optimizado -NO BORRAR-
  const { activeSubcategories, handleMouseEnter, handleMouseLeave } = useHoverWithDelay(400); //Codigo optimizado -NO BORRAR-
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg',
    'https://burst.shopifycdn.com/photos/makeup-beauty-flatlay.jpg?width=1000&format=pjpg&exif=0&iptc=0',
  ];  //Codigo optimizado -NO BORRAR-

  const { //Codigo optimizado -NO BORRAR-
    currentImageIndex,  // Índice de la imagen actual
    progress,
    handleNextImage,  // Avanza a la siguiente imagen
    handlePreviousImage,  // Retrocede a la imagen anterior
    setImageIndex,
  } = useCarousel(images); // Le pasamos `images` al hook



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
              <a href="#new">NEW</a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('bestsellers')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#bestsellers">BEST SELLER</a>
              {/* Subcategorías */}
              {activeSubcategories === 'bestsellers' && (
                <div className="subcategories active">
                  <ul>
                    <li><a href="#lipstick">Lipstick</a></li>
                    <li><a href="#lipgloss">Lip Gloss</a></li>
                    <li><a href="#liquidlipstick">Liquid Lipstick</a></li>
                    <li><a href="#lipline">Lip Liner</a></li>
                    <li><a href="#lipprimer">Lip Primer</a></li>
                  </ul>
                   
      {/* Contenedor de imágenes con descripciones a la derecha */}
      <div className="subcategory-links">
        <div className="link-item">
          <a href="#link1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg" alt="Halloween Makeup Sets" />
            <h3>Makeup de verano</h3>
            <p>Aprende a maquillarte cuando te ha dado el sol.</p>
          </a>
        </div>
        <div className="link-item">
          <a href="#link2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg" alt="New M·A·C ximal Sleek Satin Lipstick" />
            <h3>New makeup de Elena</h3>
            <p>Aprende a maquillarte con Elena paso a paso.</p>
          </a>
        </div>
      </div>
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('face')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#maquillaje">FACE</a>
              {/* Subcategorías */}
              {activeSubcategories === 'face' && (
                <div className="subcategories active">
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
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('lips')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#lips">LIPS</a>
              {/* Subcategorías */}
              {activeSubcategories === 'lips' && (
                <div className="subcategories active">
                  <ul>
                    <li><a href="#lipstick">Lipstick</a></li>
                    <li><a href="#lipgloss">Lip Gloss</a></li>
                    <li><a href="#liquidlipstick">Liquid Lipstick</a></li>
                    <li><a href="#lipline">Lip Liner</a></li>
                    <li><a href="#lipprimer">Lip Primer</a></li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('eyes')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#eyes">EYES</a>
              {/* Subcategorías */}
              {activeSubcategories === 'eyes' && (
                <div className="subcategories active">
                  <ul>
                    <li><a href="#eyeliner">Eyeliner</a></li>
                    <li><a href="#mascara">Mascara</a></li>
                    <li><a href="#eyeshadow">Eyeshadow</a></li>
                    <li><a href="#brows">Brows</a></li>
                    <li><a href="#lashes">Lashes</a></li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('brushes')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#brushes">BRUSHES</a>
              {/* Subcategorías */}
              {activeSubcategories === 'brushes' && (
                <div className="subcategories active">
                  <ul>
                    <li><a href="#eyebrushes">Eye Brushes</a></li>
                    <li><a href="#facebrushes">Face Brushes</a></li>
                    <li><a href="#lipbrushes">Lip Brushes</a></li>
                    <li><a href="#brushcleanser">Brush Cleanser</a></li>
                    <li><a href="#beautyblenders">Beauty Blenders</a></li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('tools')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#tools">TOOLS</a>
              {/* Subcategorías */}
              {activeSubcategories === 'tools' && (
                <div className="subcategories active">
                  <ul>
                    <li><a href="#applicators">Applicators</a></li>
                    <li><a href="#makeupbags">Makeup Bags</a></li>
                    <li><a href="#accessories">Accessories</a></li>
                    <li><a href="#containers">Containers</a></li>
                    <li><a href="#lashes">Lashes</a></li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Contenido principal */}
      <section id="contenido">
          {/* Contenedor del Carrusel */}
        <div className="carousel-container">
          <div className="carousel-slide">
            <a href="#link1" target="_blank" rel="noopener noreferrer">
              <img src={images[currentImageIndex]} alt="Imagen de Carrusel" />
            </a>
          </div>
          <button className="carousel-button left" onClick={handlePreviousImage}>
            &#x2039; {/* Flecha hacia la izquierda */}
          </button>
          <button className="carousel-button right" onClick={handleNextImage}>
            &#x203A; {/* Flecha hacia la derecha */}
          </button>
          {/* Indicadores de puntos */}
          <div className="carousel-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${currentImageIndex === index ? 'active' : ''}`}
              onClick={() => {
                setImageIndex(index);
                // Progress(0); // Reinicia el progreso al hacer clic
              }}
              >     
                    {/* SVG solo para el indicador activo */}
      {currentImageIndex === index && (
        <svg className="progress-ring" width="24" height="24">
          <circle
            cx="7.5"
            cy="7.5"
            r="6.3"
            fill="none"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth="1.25"
            strokeDasharray={1.5 * Math.PI * 9}
            strokeDashoffset={1.5 * Math.PI * 9 * (1 - progress / 100)}// Calcula el progreso visual
            transform="rotate(-90 7.5 7.5)" // Rotación de 90 grados hacia arriba con el centro en (12, 12)
                  />
                </svg>
              )}
              </div>              
            ))}
          </div>
        </div>
        
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
      <Footer />
    </div>
  );
}

export default App;