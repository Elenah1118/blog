// src/Components/Navbar/Navbar.js

import React, { useEffect, useState } from 'react'; 
import CategoryItem from './CategoryItem';
import categories from '../../data/categories';
import './Navbar.css';
import useHoverWithDelay from '../../hooks/useHoverWithDelay'; 
import useScrollDirection from '../../hooks/useScrollDirection'; 

const Navbar = () => { 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { activeSubcategories, handleMouseEnter, handleMouseMove, handleMouseLeave, handleClick } = useHoverWithDelay(350); 
  const { isScrollingDown, isScrolled } = useScrollDirection(); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.navbar-wrapper');
      if (navbar) {
        document.documentElement.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
      }
    };
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, []);

  if (isMobile) return null; 

  return ( 
    <div className={`navbar-wrapper ${isScrollingDown ? 'scroll-up' : 'scroll-down'} ${isScrolled ? 'scrolled-navbar' : ''}`}> 
      <nav className="navbar"> 
        <ul className="nav-links">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              category={category}
              activeSubcategories={activeSubcategories}
              handleMouseEnter={handleMouseEnter}
              handleMouseMove={handleMouseMove}
              handleMouseLeave={handleMouseLeave}
              handleClick={handleClick}
            />
          ))}
        </ul>
      </nav> 
    </div> 
  ); 
}; 

export default Navbar;
