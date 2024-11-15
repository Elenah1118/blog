import React, { useState } from 'react';
import './CartPage.css'; // Importa el archivo de estilos

const CartPage = () => {
  // Estado que simula los productos añadidos a la cesta
  const [cartItems, setCartItems] = useState([
    // Aquí puedes simular algunos productos para probar
    { id: 1, name: 'Producto 1', price: 10.99 },
    { id: 2, name: 'Producto 2', price: 15.49 },
  ]);

  return (
    <div className="cart-page">
      <h2>Tu Cesta de Compras</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes productos en tu cesta.</p>
      )}
    </div>
  );
};

export default CartPage;
