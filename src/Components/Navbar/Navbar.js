// src/Components/Navbar/Navbar.js 

import React from 'react'; 
import './Navbar.css';
import SubcategoryLinks from '../SubcategoryLinks/SubcategoryLinks';
import useHoverWithDelay from '../../hooks/useHoverWithDelay'; 
import useScrollDirection from '../../hooks/useScrollDirection'; 

const Navbar = () => { 
  const { activeSubcategories, handleMouseEnter, handleMouseLeave } = useHoverWithDelay(400); 
  const { isScrollingDown, isScrolled } = useScrollDirection(); 

  return ( 
      /* Barra de navegación */
    <div className={`navbar-wrapper ${isScrollingDown ? 'scroll-up' : 'scroll-down'} ${isScrolled ? 'scrolled-navbar' : ''}`}> 
      <nav className="navbar"> 
        <ul className="nav-links"> 
          <li className="nav-item">
            <a href="#new">NEW</a>
            </li> 

          {/* BEST SELLER */} 
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('bestsellers')} onMouseLeave={handleMouseLeave}> 
            <a href="#bestsellers">BEST SELLER</a>
                {/* Subcategorías de Best Seller */}
            {activeSubcategories === 'bestsellers' && ( 
              <div className="subcategories active"> 
                <ul> 
                  <li><a href="#lipstick">Lipstick</a></li> 
                  <li><a href="#lipgloss">Lip Gloss</a></li> 
                  <li><a href="#liquidlipstick">Liquid Lipstick</a></li> 
                  <li><a href="#lipliner">Lip Liner</a></li> 
                  <li><a href="#lipprimer">Lip Primer</a></li> 
                </ul>
                <SubcategoryLinks />
              </div>
            )} 
          </li> 

          {/* FACE */} 
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('face')} onMouseLeave={handleMouseLeave}> 
            <a href="#face">FACE</a> 
                 {/* Subcategorías de Face */}
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

          {/* LIPS */} 
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('lips')} onMouseLeave={handleMouseLeave}> 
            <a href="#lips">LIPS</a>
                 {/* Subcategorías de Lips */}
            {activeSubcategories === 'lips' && ( 
              <div className="subcategories active"> 
                <ul> 
                  <li><a href="#lipstick">Lipstick</a></li> 
                  <li><a href="#lipgloss">Lip Gloss</a></li> 
                  <li><a href="#liquidlipstick">Liquid Lipstick</a></li> 
                  <li><a href="#lipliner">Lip Liner</a></li> 
                  <li><a href="#lipprimer">Lip Primer</a></li> 
                </ul> 
              </div> 
            )} 
          </li>

          {/* EYES */} 
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('eyes')} onMouseLeave={handleMouseLeave}> 
            <a href="#eyes">EYES</a>
                 {/* Subcategorías de Eyes */}
            {activeSubcategories === 'eyes' && ( 
              <div className="subcategories active"> 
                <ul> 
                  <li><a href="#eyeliner">Eyeliner</a></li> 
                  <li><a href="#mascara">Mascara</a></li> 
                  <li><a href="#eyeshadow">Eyeshadow</a></li> 
                  <li><a href="#brows">Brows</a></li> 
                  <li><a href="#lashes">Lashes</a></li> 
                </ul> 
                <SubcategoryLinks />
              </div> 
            )} 
          </li>

          {/* BRUSHES */} 
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('brushes')} onMouseLeave={handleMouseLeave}> 
            <a href="#brushes">BRUSHES</a>
                 {/* Subcategorías de Brushes */}
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

          {/* TOOLS */} 
          <li className="nav-item" onMouseEnter={() => handleMouseEnter('tools')} onMouseLeave={handleMouseLeave}> 
            <a href="#tools">TOOLS</a>
                 {/* Subcategorías de Tools */}
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
  ); 
}; 

export default Navbar; 