//Barra de abajo con las ventajas de nuestra página
import React from 'react';
import './AppAdvantages.css';

function AppAdvantages() {
    return (
      // Contenedor principal que agrupa todas las ventajas, estilizado con CSS
      <div className="app-advantages-container">
        
        {/* Ventaja 1 */}
        <div className="advantage">
          {/* Ícono de carrito de compras usando FontAwesome */}
          <i className="fas fa-shopping-cart"></i>
          {/* Título de la ventaja */}
          <h4>Compra fácil y rápida</h4>
          {/* Descripción breve de la ventaja */}
          {/* <p>Compra en nuestra app con solo unos clics.</p> */}
        </div>
        
        {/* Ventaja 2 */}
        <div className="advantage">
          <i className="fas fa-tags"></i>
          <h4>Ofertas exclusivas</h4>
          {/* <p>Accede a descuentos especiales solo para usuarios de la app.</p> */}
        </div>
        
        {/* Ventaja 3 */}
        <div className="advantage">
          <i className="fas fa-bell"></i>
          <h4>Notificaciones en tiempo real</h4>
          {/* <p>Recibe alertas sobre nuestras mejores ofertas y novedades.</p> */}
        </div>
        <div className="advantage">
        <i className="fas fa-leaf"></i>
        <h4>Dermatological Skincare</h4>
      </div>
      </div>
    );
  }
  export default AppAdvantages;
