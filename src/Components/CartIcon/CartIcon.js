import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartIcon.css';

const CartIcon = () => {
  const navigate = useNavigate();

  // Maneja la redirección a la página de la cesta de compras
  const handleCartClick = () => {
    navigate('/cart'); // Redirige a la ruta de la cesta de compras
  };

  return (
    <div className="cart-icon" onClick={handleCartClick}>
      <i className="fas fa-shopping-cart"></i> {/* Icono de la cesta */}
    </div>
  );
};

export default CartIcon;
