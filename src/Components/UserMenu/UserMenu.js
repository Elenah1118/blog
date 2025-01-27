//Menú en el Header Logado del perfil que abre un 
//pequeño contenedor con editar perfil o inciar sesion

// src/Components/UserMenu/UserMenu.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserMenu.css'; // Importa los estilos

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook para la navegación

  // Abre o cierra el menú al hacer clic en el icono
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Función para redirigir a la página de perfil
  const handleEditProfile = () => {
    navigate('/profile'); // Redirige a la ruta del perfil
    setIsMenuOpen(false); // Cierra el menú después de hacer clic
  };

  return (
    <div className="user-menu">
      <div className="user-icon" onClick={toggleMenu}>
        <i className="fas fa-user-circle"></i>
      </div>
      {isMenuOpen && (
        <div
          className="menu-dropdown"
          onMouseEnter={() => setIsMenuOpen(true)} // Mantiene el menú abierto
          onMouseLeave={() => setIsMenuOpen(false)} // Cierra el menú cuando el cursor sale del área del menú
        >
          <ul>
            <li onClick={handleEditProfile}>Editar Perfil</li> {/* Redirige al perfil */}
            <li>Cerrar Sesión</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
