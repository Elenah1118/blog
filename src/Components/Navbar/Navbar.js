// src/Components/Navbar/Navbar.js 

import React, { useEffect, useState } from 'react'; 
// import { Link } from 'react-router-dom'; // Importa Link para la navegación interna

import CategoryItem from './CategoryItem';
import categories from '../../data/categories';

import './Navbar.css';
// import SubcategoryLinks from '../SubcategoryLinks/SubcategoryLinks';
import useHoverWithDelay from '../../hooks/useHoverWithDelay'; 
import useScrollDirection from '../../hooks/useScrollDirection'; 

const Navbar = () => { 





  // ✅ Estado para detectar si estamos en una pantalla móvil (menor a 768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { activeSubcategories, handleMouseEnter, handleMouseLeave } = useHoverWithDelay(400); 
  const { isScrollingDown, isScrolled } = useScrollDirection(); 




  // ✅ Efecto para actualizar isMobile cuando el usuario cambia el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize); // Escucha el evento resize
    return () => window.removeEventListener('resize', handleResize); // Limpieza del evento
  }, []);



  // ******************* ✅ Actualiza la altura del navbar dinámicamente **************************
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.navbar-wrapper');
      if (navbar) {
        document.documentElement.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
        console.log("📏 Altura del navbar-wrapper:", navbar.offsetHeight);
      }
    };
  
    updateNavbarHeight(); // Llamada inicial
    window.addEventListener('resize', updateNavbarHeight); // Se actualiza cuando cambia el tamaño
  
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);
// ***********************************************************************************************
 

  // ✅ Si la pantalla es pequeña, ocultamos completamente el navbar
  if (isMobile) return null; 




  return ( 
      /* Barra de navegación */
    <div className={`navbar-wrapper ${isScrollingDown ? 'scroll-up' : 'scroll-down'} ${isScrolled ? 'scrolled-navbar' : ''}`}> 
      <nav className="navbar"> 
      <ul className="nav-links">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              activeSubcategories={activeSubcategories}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </ul>
      </nav> 
    </div> 
  ); 
}; 

export default Navbar; 