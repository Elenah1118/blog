//el que tenia antes

// import React from 'react';
// import './Header.css';

// const Header = ({ isScrolled }) => (
//   <header className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
//     <div className="logo">
//     <img src="/assets/images/Makeup.png" alt="Logo de tu blog" />
//     </div>
//     <div className="top-actions">
//       <button className="login-button">Iniciar Sesión</button>
//       <button className="subscribe-button">Suscribirse</button>
//     </div>
//   </header>
// );

// export default Header;


//chatgpt dice que es mejor porque detecta si la apgina ha sido
//desplazada usando el hooks
// src/Components/Header/Header.js
// src/Components/Header/Header.js
// import React from 'react';
// import './Header.css';
// import useScrollDirection from '../../hooks/useScrollDirection';

// // Importa el logo desde la carpeta assets/images
// import logo from '../../assets/images/Makeup.png';

// const Header = () => {
//   // Detecta si la página ha sido desplazada usando el hook useScrollDirection
//   const isScrolled = useScrollDirection();

//   return (
//     <header className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="logo">
//         {/* Usa el nuevo logo desde assets/images */}
//         <img src={logo} alt="Logo de Glow Up" />
//       </div>
//       <div className="top-actions">
//         <button className="login-button">Iniciar Sesión</button>
//         <button className="subscribe-button">Suscribirse</button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// src/Components/Header/Header.js
// src/Components/Header/Header.js
import React from 'react';
import './Header.css';
import useScrollDirection from '../../hooks/useScrollDirection';

const Header = () => {
  const { isScrolled } = useScrollDirection();

  return (
      /* Cabecera superior con logo y botones */
      <header className={`top-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
      <img src="logo.png" alt="Logo de tu blog" />
      </div>
      <div className="top-actions">
        <button className="login-button">Iniciar Sesión</button>
        <button className="subscribe-button">Suscribirse</button>
      </div>
    </header>
  );
};

export default Header;